import { name } from "ejs";
import { model, Schema } from "mongoose";

const employeesSchema = new Schema({
  employe_number: {
    require: true,
    unique: true,
    type: String,
  },
  name: String,
  lastname: String,
  age: Number,
  email: String,
  salary: Number,
}, {
  versionKey: false,
  timestamps: true,
});

export default model('employees', employeesSchema);
