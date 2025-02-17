import{model , Schema} from "mongoose";
const productSchema = new Schema({//defien la esyructura de la base de datos con Schema 
    barcode:{
     require : true ,
     unique : true,
    type : Number
    },
    description : String,
    brand : String,
    price : Number,
    cost : Number,
    expired_date : String,
    stock : Number
},{
    versionKey:false,
    timestamps:true
    })


export default model('product',productSchema)