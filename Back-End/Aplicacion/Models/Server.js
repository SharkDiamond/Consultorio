const express = require('express');
const cors= require('cors');
const {Conexion}=require("../Data/configDB");


class Server{

    constructor(){

        this.app=express();

        //Middlewares
        this.middlewares();

        this.routes();
        Conexion();


    }


    middlewares(){

        this.app.use(express.static("public"));
        
       this.app.use(express.json());
        
        this.app.use(cors());
        
    }


    routes(){

      
       
    } 

    Escuchar(){
        
       this.app.listen(8081);

    }

}


module.exports=Server;