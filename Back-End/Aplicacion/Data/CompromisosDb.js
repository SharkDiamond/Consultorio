const {Schema,model} =require("mongoose");



const Compromisos=new Schema({

    UsuarioPerteneciente:{
        type:String,
        require:[true,"El usuario del cual es el compromiso es necesario"]
    },
    Nombre:{
        type:String,
        require:[true,"El nombre del compromiso es requerido"]
    },
    Fecha:{
        type:Date,
        require:[true,"La fecha es necesaria"]

    }

});

module.exports=model("Compromiso",Compromisos);