import { Router } from "express";
import employedController  from "../controllers/employees.controller.js";
const router=Router();
router.get('/getAll',employedController.getAll);
export default router;