import employedDAO from "../dao/employees.dao.js";
import employees from "../models/employees.js";

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

employedController.getOne = (req, res) => {
    const { id } = req.params;  // Aquí deberías obtener el "id" del empleado, no "employee"

    employedDAO.getOne(id)  // Pasas "id" al DAO
        .then((employee) => {
            if (!employee) {
                return res.status(404).json({ message: 'Empleado no encontrado' });
            }
            res.json(employee);  // Devuelves la información del empleado
        })
        .catch((error) => {
            res.status(500).json({
                data: {
                    error: error.message || 'Error al obtener el empleado'
                }
            });
        });
};

employedController.insert= (req,res)=>{
    employedDAO.insert(req.body)
    .then((response)=>{
        res.json({
            data:{
                message:"producto insertado ala base de a"
            }
        })
    })
    .catch((error)=>{
        res.json({
            data:({
                message:error
            })
        })
    });
};

employedController.updateOne=(req,res)=>{
    employedDAO.updateOne(req.body, req.params._id)
    .then((result)=>{
        res.json({
            data:{
                message:"employes actualizado de manera exitosa",
                result:result
            }
        });
    })
    .catch((error)=>{
        res.json({
            message:error
        })
    });
};

employedController.deleteOne=(req,res)=>{
    employedDAO.deleteOne(req.params._id)
    .then((employeesDeleted)=>{
        res.json({
            data:({
                message:"employed elinado alv",
                employees:employeesDeleted,
            })
        })
    })
    .catch((error)=>{
        res.json({
            data:{
                error: error
            }
        })
    })
}




export default employedController;