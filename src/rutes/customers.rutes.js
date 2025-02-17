import express from 'express';  // Asegúrate de importar express
import customersControllers from '../controllers/customers.controllers.js';

const router = express.Router();  // Usa express.Router() en lugar de Route()

router.get('/getAll', customersControllers.getAll);

router.get('/getOne/:_id', customersControllers.getOne);

router.post('/insert',customersControllers.insert);

router.put('/updateOne/:_id',customersControllers.updateOne);

router.delete('/deleteOne/:_id',customersControllers.deleteOne);






export default router;
