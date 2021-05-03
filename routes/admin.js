const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const  Producto = require("../models/producto");

router.post("/registro",(req,res,next)=>{
    let newProducto = new Producto({
        ID: req.body.ID,
        nombre: req.body.nombre,
        marca: req.body.marca,
        descripcion: req.body.descripcion,
        seccion: req.body.seccion,
        precio: req.body.precio,
        cantidad: req.body.cantidad,
        fecha_caducidad: req.body.fecha_caducidad,
        procedencia: req.body.procedencia
    });

    Producto.addProducto(newProducto,(err,status)=>{
        if(err){
            res.json({
                success: false,
                msg: status
            });
        }else{
            res.json({
                success: true,
                msg: status
            });
        }
    })
});

router.post("/modificar",(req,res,next)=>{

    let campos = ["ID","nombre","marca","descripcion","seccion","precio","cantidad","fecha_caducidad","procedencia"];

    let valores =[req.body.ID,req.body.nombre,req.body.marca,req.body.descripcion,req.body.seccion,req.body.precio,req.body.cantidad,req.body.fecha_caducidad,req.body.procedencia];
    
    const ID = valores[0];
    let error = false;

    Producto.getProductoByID(ID,(err,productos)=>{
        if(productos == undefined){
            res.json({
                success: false,
                msg:"No existe el producto en la BBDD"
            });
        }else{

            for(i=0;i<9;i++){
                Producto.modificarProducto(ID,campos[i],valores[i],(err,Producto)=>{
                    if(err){
                        error=true;
                    }
                });
            }

            if(error){
                res.json({
                    success: false,
                    msg:"Error en modificacion"
                });
            }else{
                res.json({
                    success: true,
                    msg: "Modificacion completada"
                });
            }
        }
    });
});

router.get('/consultar', (req, res, next) => {

    Producto.getAllProducts((err,Producto)=>{
        
        if (err){
            res.json({
                success: false,
                msg: "Error al listar"
            });
        } else {
            res.json({
                success:true,
                msg: Producto
            });   
        }  
    }) 
});

router.post("/eliminar",(req,res, next) => {

    Producto.eliminarProducto(req.body.ID,(err,status)=>{

        if (err){
            res.json({
                success: false,
                msg: status
            });
        } else {
            res.json({
                success:true,
                msg: status
            }); 
        }  
    });
});

router.post("/listarIDMongo",(req,res,next)=>{
    
    const ID = req.body.ID;
    Producto.getItemByIDMongo(ID,(err,item)=>{

        if(err){
            res.json({
                success: false,
                msg:"Error listando por Mongo"
            });
        }else{
            res.json({
                success: true,
                msg: item,
            });
        }
    })
});

module.exports = router;
