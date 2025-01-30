import { request, response } from "express";
import productDao from "../dao/products.dao.js";
import { error } from "console";

const productsController = {};

productsController.getAll = (request, response) => {
    productDao.getAll()
        .then((products) => {
            response.render('../src/views/index.ejs', { products: products }); // Asegúrate de pasar la variable products
        })
        .catch((error) => {
            response.json({
                data: {
                    message: error
                }
            });
        });
};

// para mostrar solo uno
productsController.getOne = (request, response) => {
    productDao.getOne(request.params.barcode)
        .then((product) => {
            if (product != null) {
                return response.json({ data: product });
            } else {
                return response.json({ data: { message: "Product not found" } });
            }
        })
        .catch((error) => {
            return response.json({
                data: {
                    message: error
                }
            });
        });
};

// función que:
productsController.insert = (request, response) => {
    productDao.insert(request.body)
        .then((product) => {
            response.json({
                // data: {
                //     message: "Product insert successfully",
                //     product: product
                // }
            });
            // return response.redirect('/groceries/products/getAll'); // Eliminado para evitar el error
        })
        .catch((error) => {
            return response.json({
                data: {
                    message: error
                }
            });
        });
};

productsController.updateOne = (request, response) => {
    productDao.updateOne(request.body, request.params.barcode)
        .then((result) => {
            return response.json({
                data: {
                    message: "Product updated successfully",
                    result: result
                }
            });
        })
        .catch((error) => {
            return response.json({
                data: {
                    error: error
                }
            });
        });
};

productsController.deleteOne = (request, response) => {
    productDao.deleteOne(request.params.barcode)
        .then((productDelete) => {
            return response.json({
                data: {
                    message: "Product deleted successfully",
                    product_delete: productDelete
                }
            });
        })
        .catch((error) => {
            return response.json({
                data: {
                    error: error
                }
            });
        });
};

export default productsController;
