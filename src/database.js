import mongoose from "mongoose";

mongoose.connect('mongodb+srv://baduri490:kabbalamijo8@cluster1.b6s45.mongodb.net/groceries_db')
.then((db) => console.log('MongoDB Atlas conectado'))
.catch((error) => console.error('Error al conectar a MongoDB Atlas:', error));

export default mongoose;
