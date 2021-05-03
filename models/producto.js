const mongoose = require ("mongoose");
const config = require ("../config/database");

//Schema de libros

const Schema = mongoose.Schema({

    ID: {
        type:String,
        required: true
    },
    nombre: {
        type:String,
        required: true
    },
    marca:{
        type:String,
        required: true
    },
    descripcion: {
        type:String,
        required: true
    },
    seccion:{
        type:String,
        required: true
    },
    precio:{
        type:Number,
        required: true
    },
    cantidad:{
        type:Number,
        required: true
    },
    fecha_caducidad:{
        type:String,
        required: true

    },
    procedencia:{
        type:String,
        required: true
    }
});

const Producto = module.exports = mongoose.model("Producto",Schema); //Hacemos que sea accesible desde fuera de la clase

module.exports.getProductoByID = function(ID,callback){ //Todos los accesos desde fuera tienen que tener un export
    const query = {ID:ID};
    Producto.findOne(query,callback);
}

module.exports.getAllProducts = function(callback){
    Producto.find({},callback);
}

module.exports.getAllProductsByName = function(nombre,callback){
    const query = {nombre:nombre};
    Producto.find(query,callback);
}

module.exports.getProductoByName = function(nombre,callback){
    const query = {nombre:nombre};
    Producto.findOne(query,callback);
}

module.exports.addProducto = function(producto,callback){

    console.log(producto.ID);

    Producto.getProductoByID(producto.ID,(error,productos)=>{
        console.log(productos);
        if(productos == undefined){
            producto.save(callback);
        }else{
            callback(Error,"Producto con ese ID ya existe");
        }
    });
}

module.exports.eliminarProducto = function(ID,callback){
    
    Producto.getProductoByID(ID,(error,productos)=>{

        if(productos == undefined){
            callback(Error,"Producto no existe en la BBDD");
        }else{
            const query = {ID:ID}; 
            Producto.deleteOne(query,callback);
        }
    });
}

module.exports.modificarProducto = function(ID,campo,valor,callback){

    const query = {ID:ID}

    Producto.findOne(query,(error,producto)=>{
        console.log(valor);
        producto[campo] = valor;
        producto.save();
        console.log(producto.cantidad);
        callback(error,producto);
    });
}

module.exports.getItemByIDMongo = function(ID, callback){

    var o_id = new ObjectId(ID);
    const query = {_id:o_id}

    Producto.findOne(query,callback);
}
