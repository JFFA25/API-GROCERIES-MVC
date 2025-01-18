import employedDAO from "../dao/employees.dao.js";
const employedController={};
employedController.getAll=(req,res)=>{
    //Aqui se piden los productos al DAO
    employedDAO.getAll()
    .then((employed)=>{
        res.json(employed)
    })
    .catch((error)=>{
     res.json({
        data:{
            "message" : error
        }
     })
    })
};
export default employedController;