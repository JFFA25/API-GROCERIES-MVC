import customers from "../models/customers.js";
const customersDAO={};
customersDAO.getAll=async()=>{
    return await customers.find();
}
export default customersDAO;