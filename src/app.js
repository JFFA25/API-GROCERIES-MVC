//Aqui va la configuracion del servidor 
import express, { Router } from 'express';
import morgan from 'morgan';
import productsRouter from './rutes/products.rutes.js'
const app = express();

//Settings
app.set('port',process.env.PORT||3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Routes
app.use('/groceries/products', productsRouter)
export default app;