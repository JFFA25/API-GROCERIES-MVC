import productDAO from "../dao/products.dao.js";
const productsController={};
productsController.getAll=(req,res)=>{
    //Aqui se piden los productos al DAO
    productDAO.getAll()
    .then((products)=>{
        res.json(products)
    })
    .catch((error)=>{
     res.json({
        data:{
            "message" : error
        }
     })
    })
};
export default productsController;