import {  name } from "ejs"; 
import { model,Schema } from "mongoose";    

const customersSchema = new Schema({
    customers_number: {
        require: true,
        unique :true,
        type :Number ,
    },
    name : String,
    lastname:String,
    age: Number,
    email:String ,
    phone:Number ,
},{
    versionKey :false,
    timestamps : true,
});
export default model('customers', customersSchema) 