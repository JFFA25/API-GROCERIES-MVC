import mongoose from "mongoose";

mongoose.connect('mongodb+srv://sonicamador2005:paco1234@clusterpaco.tzvns.mongodb.net/groceries_db?retryWrites=true&w=majority&appName=ClusterPaco')
.then((db) => console.log('MongoDB Atlas conectado'))
.catch((error) => console.error('Error al conectar a MongoDB Atlas:', error));

export default mongoose;
