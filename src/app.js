//Aqui va la configuracion del servidor 
import express, { Router } from 'express';
import morgan from 'morgan';
import productsRouter from './rutes/products.rutes.js'
import employedRouter from './rutes/employees.rutes.js';
import customersRouter from './rutes/customers.rutes.js';
import cors from "cors";

const app = express();


//Settings
app.set('port',process.env.PORT||3008);

//Middlewares funciones que se ejeutan en tre la solicitudud y la respuesta en una applicacion 
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

 // Ajusta la ruta si tus vistas están en otro directorio


//Routes
app.use('/groceries/products', productsRouter)
app.use('/groceries/employees', employedRouter)
app.use('/groceries/customers', customersRouter)




export default app;

