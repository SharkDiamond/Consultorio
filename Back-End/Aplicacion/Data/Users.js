const {Schema,model}=require("mongoose");



const UsuarioSchema=Schema({

nombre:{
type:String,
require:[true,"El nombre es obligatorio"],
unique:[true,"El usuario ya existe"]

},
password:{
type:String,
require:[true,"El password es obligatorio"]

},
estado:{
type:Boolean,
default:true

}

});



module.exports=model("Usuario",UsuarioSchema);