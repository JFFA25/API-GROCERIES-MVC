import customersDAO from "../dao/customers.dao.js";
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
export default customersController;