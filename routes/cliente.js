const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const  Producto = require("../models/producto");
const Compra = require("../models/compra");

router.post("/listar",(req,res,next)=>{
    
    Producto.getAllProducts((err,productos)=>{

        if(err){
            res.json({
                success: false,
                msg:"Error en listado"
            });
        }else{
            res.json({
                success: true,
                msg: productos,
            });
        }
    })
});

router.post("/listarUno",(req,res,next)=>{

    const ID = req.body.ID;

    Producto.getProductoByID(ID,(err,producto)=>{

        if(err){
            res.json({
                success: false,
                msg:"Error en listado"
            });
        }else{
            res.json({
                success: true,
                msg: producto,
            });
        }
    })
});

router.post("/comprar",(req,res,next)=>{

    let newCompra = new Compra({
        ID: req.body.ID,
        cantidad: req.body.cantidad,
        precio_total: req.body.precio_total,
        ID_producto: req.body.ID_producto,
        nombre_producto: req.body.nombre_producto,
        producto: "datos de producto"
    });

    Compra.addCompra(newCompra,(error,status)=>{

        console.log(error);
        console.log(status);

        if(error){
            res.json({
                success: false,
                msg:status
            });
        }else{
            res.json({
                success: true,
                msg: status
            });
        }
    })
});

router.post("/listarcompra",(req,res,next)=>{

    const ID = req.body.ID;

    Compra.getCompraByID(ID,(err,compra)=>{

        if(err){
            res.json({
                success: false,
                msg:"Error en listado"
            });
        }else{
            res.json({
                success: true,
                msg: compra,
            });
        }
    })
});

router.post("/listartodascompras",(req,res,next)=>{

    Compra.getAllCompras((err,compra)=>{

        if(err){
            res.json({
                success: false,
                msg:"Error en listado de todas las compras"
            });
        }else{
            res.json({
                success: true,
                msg: compra,
            });
        }
    })
});

router.post("/cancelarcompra",(req,res,next)=>{

    const ID = req.body.ID;

    Compra.cancelarCompra(ID,(err,status)=>{

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



module.exports = router;