import { Router } from "express";
import employedController  from "../controllers/employees.controller.js";
const router=Router();
router.get('/getAll',employedController.getAll);
router.get('/getOne/:id',employedController.getOne);

router.post('/insert',employedController.insert);

router.put('/updateOne/:_id',employedController.updateOne);

router.delete('/deleteOne/:_id',employedController.deleteOne);


export default router;
