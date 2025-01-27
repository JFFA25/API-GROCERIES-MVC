import { request, response } from "express";
import productDao from "../dao/products.dao.js";
import { error } from "console";

const productsController={};

productsController.getAll=(request,response)=>{
    //aqui se piden los productos al DAO porcesa la peticion
    productDao.getAll()
    .then((products)=>{
        response.json({
            data:products
        })
    })
    .catch((error)=>{
        response.json({
            data:{
                "message":error
            }
        })
    });
};
//para mostrar solo uno
productsController.getOne=(request,response)=>{
    productDao.getOne(request.params.barcode)//ESTO QUE ESTA EN PARENTESIS SE LLAMA ARGUMENTO DE LLAMADA 
    .then((product)=>{
        if(product!=null)
            response.json({data:product});
        else
            response.json({data:{message:"Product not fund"}});
        }
    )
    .catch((error)=>{
        response.json({
            data:{
                message:error
            }
        });
    }
)};
//funcion que:
productsController.insert=(request,response)=>{
    productDao.insert(request.body)
    .then((product)=>{
        response.json({
            data:{
                message:"Product insert successefully",
                product:product
            }
        })
    })
    .catch((error)=>{
        response.json({
            data:{
                message:error
            }
        })
    });
};
productsController.updateOne=(request,response)=>{
    productDao.updateOne(request.body,request.params.barcode)
    .then((result)=>{
        response.json({
            data:{
                message:"product updated successfully",
                result:result
            }
        })
    })
    .catch((error)=>{
        response.json({
            data:{
                error: error
            }
        })
    });
};

productsController.deleteOne=(request,response)=>{
    productDao.deleteOne(request.params.barcode)
    .then((productDelete)=>{
        response.json({
        data:{
            message:"Product deleted successfully",
            product_delete:productDelete
            }
        })
    })
    .catch((error)=>{
        response.json({
            data:{
                error: error
            }
        })
    });
}

export default productsController;