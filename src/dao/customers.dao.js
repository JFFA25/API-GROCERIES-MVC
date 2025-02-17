import customers from "../models/customers.js"

const customersDAO= {};

customersDAO.getAll = async () => {
    return await customers.find();

};

customersDAO.getOne = async (id)=>{
    return await  customers.findOne({id});
};

customersDAO.insert = async(customersData)=>{
    return await customers.create(customersData);
};



customersDAO.updateOne = async (customersData, _id) => {
    return await customers.findOneAndUpdate({ _id: _id }, customersData, { new: true });
};


customersDAO.deleteOne = async (_id)=>{
    return await customers.findOneAndDelete({_id:_id})
};

export default customersDAO;

