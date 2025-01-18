import { name } from "ejs";
import{model , Schema} from "mongoose";
const productSchema = new Schema({
    bardcode:{
     require : true ,
     unique : true,
    type : String
    },
    description : String,
    brand : String,
    price : Number,
    cost : Number,
    expired_date : String,
    stock : String
},{
    versionKey:false,
    timestamps:true
    })


export default model('product',productSchema)