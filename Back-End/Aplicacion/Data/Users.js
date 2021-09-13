const {Schema,model}=require("mongoose");

const UsuarioSchema=Schema({

Usuario:{
type:String,
require:[true,"El Usuario es obligatorio"],
unique:[true,"El usuario ya existe"]

},
Password:{
type:String,
require:[true,"El Password es obligatorio"]

},
Nombre:{
type:String,
require:[true,"El Nombre es necesario"]

},
Apellido:{
type:String,
require:[true,"El Apellido es requerido"]

},
Active:{
type:Boolean,
default:true

}


});



module.exports=model("User",UsuarioSchema);