import employees from "../models/employees.js";

const employedDAO={};
employedDAO.getAll=async()=>{
    return await employees.find();
};

employedDAO.getOne = async (id) => {
    return await employees.findOne({ _id: id }); 
};
employedDAO.insert = async (employeeData) => {
    return await employees.create(employeeData);
};

employedDAO.updateOne = async (employeeData, _id) => {
    return await employees.findOneAndUpdate(
        { _id: _id },  employeeData,  { new: true } );
}

employedDAO.deleteOne = async(_id)=>{
    return await employees.findOneAndDelete({_id:_id});
};


export default employedDAO;