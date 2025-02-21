import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../Api";
import ProductForm from "./ProductForm";

import './ProductsList.css'; // Hoja de estilos CSS

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const data = await getProducts();
        if (data.success) {
            setProducts(data.data);
        }
    };

    const handleDelete = async (barcode) => {
        await deleteProduct(barcode);
        loadProducts();
    };

    return (
        <div className="products-list-container">
            <h2 className="products-list-title">Lista de Productos</h2>
            <ProductForm reload={loadProducts} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
            <ul className="products-list">
                {products.map((product) => (
                    <li key={product.barcode} className="product-item">
                        <div className="product-info">
                            <span className="product-description">{product.description}</span>
                            <span className="product-price">${product.price}</span>
                        </div>
                        <div className="product-actions">
                            <button className="edit-btn" onClick={() => setSelectedProduct(product)}>Editar</button>
                            <button className="delete-btn" onClick={() => handleDelete(product.barcode)}>Eliminar</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsList;