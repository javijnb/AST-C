const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");//Permite parsear info entrante
const cors = require("cors"); //Permite el acceso desde un dominio diferente
const mongoose = require("mongoose");
const config = require("./config/database");
const routesadmin = require("./routes/admin");
const routescliente = require("./routes/cliente");

mongoose.connect(config.database);

mongoose.connection.on("connected",() =>{
    console.log('Conectado a la base de datos: '+config.database);
});

mongoose.connection.on("error",(err)=>{
    console.log("Error en la base de datos: "+err);
});

const app = express();
const port = process.env.PORT || 9000; //Busca en las variables de entorno o sino en el 9000



// CORS Middleware
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());

app.use("/admin",routesadmin); //Establecemos URL:local../contenido al archivo contenido.js que tiene las rutas

app.use("/cliente",routescliente);

// Static Folder
app.use(express.static(path.join(__dirname,"public")));

app.get('/',(req,res) =>{
    res.send("Path incorrecto");
});

app.listen(port,()=>{
    console.log("Prueba de funcionamiento del server en el puerto: "+port);
});

