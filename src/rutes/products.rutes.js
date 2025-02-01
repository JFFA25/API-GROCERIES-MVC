import { response, Router } from "express";
import productsController from "../controllers/products.controller.js";
const router=Router();
router.get('/getAll',productsController.getAll);
//ruta para mostrar solo un producto...
router.get('/getOne/:barcode',productsController.getOne);
//ruta para...
router.post('/insert',productsController.insert)
//ruta para..que el barcode se actualice y necesita los parametros 
router.put('/updateOne/:barcode',productsController.updateOne);
//
router.get('/deleteOne/:barcode',productsController.deleteOne);
export default router;