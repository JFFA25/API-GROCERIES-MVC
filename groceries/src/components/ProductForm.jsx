import { useEffect, useState } from "react";
import { addProduct, updateProduct } from "../Api";
import './ProductForm.css'; // Asegúrate de tener esta hoja de estilos con las clases

const ProductForm = ({ reload, selectedProduct, setSelectedProduct }) => {
    const [formData, setFormData] = useState({
        barcode: "",
        description: "",
        brand: "",
        price: "",
        cost: "",
        expired_date: "",
        stock: "",
    });

    useEffect(() => {
        if (selectedProduct) {
            setFormData(selectedProduct);
        }
    }, [selectedProduct]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response;
            if (selectedProduct) {
                response = await updateProduct(formData.barcode, formData);
            } else {
                response = await addProduct(formData);
            }
    
            if (!response.success) {
                throw new Error(response.message); // Captura el mensaje de error del backend
            }
    
            alert(selectedProduct ? "Producto actualizado con éxito" : "Producto agregado con éxito");
    
            setFormData({
                barcode: "",
                description: "",
                brand: "",
                price: "",
                cost: "",
                expired_date: "",
                stock: "",
            });
            setSelectedProduct(null);
            reload();
        } catch (error) {
            alert(error.message); // Muestra una alerta si el código de barras ya existe
        }
    };
    

    return (
        <div className="product-form-container">
            <form className="product-form" onSubmit={handleSubmit}>
                <h2>{selectedProduct ? "Actualizar Producto" : "Agregar Producto"}</h2>
                <div className="form-group">
                    <label htmlFor="barcode">Código de barras</label>
                    <input type="text" name="barcode" id="barcode" placeholder="Código de barras" value={formData.barcode} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Descripción</label>
                    <input type="text" name="description" id="description" placeholder="Descripción" value={formData.description} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="brand">Marca</label>
                    <input type="text" name="brand" id="brand" placeholder="Marca" value={formData.brand} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Precio</label>
                    <input type="number" name="price" id="price" placeholder="Precio" value={formData.price} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="cost">Costo</label>
                    <input type="number" name="cost" id="cost" placeholder="Costo" value={formData.cost} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="expired_date">Fecha de expiración</label>
                    <input type="text" name="expired_date" id="expired_date" placeholder="Fecha de expiración" value={formData.expired_date} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="stock">Stock</label>
                    <input type="number" name="stock" id="stock" placeholder="Stock" value={formData.stock} onChange={handleChange} required />
                </div>
                <button className="submit-btn" type="submit">{selectedProduct ? "Actualizar" : "Agregar"} Producto</button>
            </form>
        </div>
    );
};

export default ProductForm;