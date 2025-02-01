import { request, response } from "express";
import productDAO from "../dao/products.dao.js";

const productsController={};//creacion del objeto vacio para agrupar metodos de gestino de sistema lo de un crud 


productsController.getAll = (request, response) => {
    productDAO.getAll()
    .then((products) => {
        response.render('../src/views/index.ejs', { products }); //  Renderiza la vista con los datos
    })
    .catch((error) => {
        response.status(500).json({ message: error }); // Envía JSON solo en caso de error
    });
};

productsController.getOne = (req, res) => {
    // Obtiene el código de barras desde los parámetros de la solicitud
    const { barcode } = req.params;

    productDAO.getOne(barcode)
        /*.then((product) => {
            // Devuelve el producto obtenido en formato JSON
            res.json(product);
        })*/
       res.render('../src/views/edit-ejs',{products})
        .catch((error) => {
            // Manejo de errores en caso de fallo al obtener el producto
            res.json({
                data: {
                    message: error // Devuelve el mensaje del error
                }
            });
        });
};



productsController.insert=(req,res)=>{
    productDAO.insert(req.body)
    .then((response)=>{
      /*  res.json({
            data:{
                message: "producto agregado con exito",
                product:response

            }
        })*/
       res.redirect('/groceries/products/getAll')
    })
    .catch((error)=>{
        res.json({
            data:{
                message:error
            }
        })
    });
}


productsController.updateOne=(req,res)=>{
    productDAO.updateOne(req.body, req.params.barcode)
    .then((result)=>{
        res.json({
            data:{
                message:"producto actualizado correctamente  con exito ",
                result:result
            }
        });
    })
    .catch((error)=>{
    res.json({
        data:{error:error
            
        }});
    
    });

}


productsController.deleteOne=(req,res)=>{
    productDAO.deleteOne(req.params.barcode)
    .then((productDeleted)=>{
        // res.json({
        //     data:{
        //         message:"product deleted succelfully",
        //         product:productDeleted,

        //     }
        // }); 
        res.redirect('/groceries/products/getAll')
    })
    .catch((error)=>{
        res.json({
            data:{
                error:error
            }
        });
    })
}


export default productsController;//exprotacion por si puede ser usao en otras partes del proyecto 