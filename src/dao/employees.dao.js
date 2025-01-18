import employees from "../models/employees.js";
import employed from "../models/employees.js";
const employedDAO={};
employedDAO.getAll=async()=>{
    return await employees.find();
}
export default employedDAO;