import { request, response } from "express";
import productDAO from "../dao/products.dao.js";

const productsController = {};

productsController.getAll = (request, response) => {
    productDAO.getAll()
        .then((products) => {
            response.json({ success: true, data: products });
        })
        .catch((error) => {
            response.status(500).json({ success: false, message: error });
        });
};

productsController.getOne = (req, res) => {
    const { barcode } = req.params;

    productDAO.getOne(barcode)
        .then((product) => {
            if (product) {
                res.json({ success: true, data: product });
            } else {
                res.status(404).json({ success: false, message: "Producto no encontrado" });
            }
        })
        .catch((error) => {
            res.status(500).json({ success: false, message: error });
        });
};

productsController.insert = (req, res) => {
    productDAO.insert(req.body)
        .then((response) => {
            res.json({ success: true, message: "Producto agregado con éxito", data: response });
        })
        .catch((error) => {
            res.status(500).json({ success: false, message: error });
        });
};

productsController.updateOne = (req, res) => {
    productDAO.updateOne(req.body, req.params.barcode)
        .then((response) => {
            res.json({ success: true, message: "Producto actualizado con éxito", data: response });
        })
        .catch((error) => {
            res.status(500).json({ success: false, message: error });
        });
};

productsController.deleteOne = (req, res) => {
    productDAO.deleteOne(req.params.barcode)
        .then((productDeleted) => {
            res.json({ success: true, message: "Producto eliminado con éxito", data: productDeleted });
        })
        .catch((error) => {
            res.status(500).json({ success: false, message: error });
        });
};

export default productsController;
