import customersDAO from "../dao/customers.dao.js";
import productDAO from "../dao/products.dao.js";
import customers from "../models/customers.js";

const customersController={};

customersController.getAll=(req,res)=>{
    //Aqui se piden los productos al DAO
    customersDAO.getAll()
    
    .then((customers)=>{
        res.json(customers)
    })
    .catch((error)=>{
     res.json({
        data:{
            "message" : error
        }
     })
    })
};

customersController.getOne = (req,res)=>{
    const {id} = req.params;


    customersDAO.getOne(id)
    .then((customers)=>{
        res.json(customers);
    })
    .catch((error)=>{
        res.json({
            data:{
                message:error
            }
        });
    });

}

customersController.insert=(req,res)=>{
    customersDAO.insert(req.body)
    .then((response)=>{
        res.json({
            data:{
                message:"product agregado con exito",
                customers:response 
            }
        })
    })
    .catch((error)=>{
        res.json({
            data:{
                message:"producto agregado con exito ",
                customers:response 
            }
        })
    });

};

customersController.updateOne =(req,res)=>{
    customersDAO.updateOne(req.body, req.params._id )
    .then((result)=>{
        res.json({
            data:{
                message:"product acutalizado ",
                result:result
            }
        })
    })
    .catch((error)=>{
        res.json({
            data:{
                error:error
            }
        })
    });
};

customersController.deleteOne=(req,res)=>{
    customersDAO.deleteOne(req.params._id)
    .then((customersDeleted)=>{
        res.json({
            data:{
                message:"customer delete of the bases data",
                customers_delted:customersDeleted
            }
        })
    })
    .catch((error)=>{
        res.json({
            data:{
                error:error
            }
        })
    })
};


export default customersController;