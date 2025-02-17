
import Product from "../models/Product.js";

const productDAO = {};//se crea un objeto vacio 

productDAO.getAll = async () => {//funcion asyncrona para traer todos los datos alamcenados en la base de datos usados
    return await Product.find();  //await es para esperar mientras no se usa y si se usa se ejecuta pero si no espera 
    //puede ejecutarse mientras puede hacer otras cosas
};


//esta funcion lo que hace es de que trae un dato 
productDAO.getOne = async (barcode) => {
    return await Product.findOne({barcode:barcode});

};

//esta funcion se crea e inserta un producto nuevo 
productDAO.insert=async(product) =>{
    return await Product.create(product);
};




productDAO.updateOne = async(product,barcode) =>{
    return await Product.findOneAndUpdate({ barcode: barcode }, product, { new: true });

    };


productDAO.deleteOne = async(barcode) =>{
 return await Product.findOneAndDelete({barcode:barcode});
};
    





export default productDAO;  
