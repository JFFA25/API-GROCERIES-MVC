import { name } from "ejs";
import { model, Schema } from "mongoose";

const customersSchema = new Schema({
  nombre: {
    require: true,
    unique: true,
    type: String,
  },
  telefono : Number,
  Direccion: String,
  Correo: String,
 
}, {
  versionKey: false,
  timestamps: true,
});

export default model('customers', customersSchema);
