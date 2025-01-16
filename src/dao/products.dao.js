import Product from "../models/Product.js";
const productDAO={};
productDAO.getAll=async()=>{
    return await Product.find();
}
export default productDAO;