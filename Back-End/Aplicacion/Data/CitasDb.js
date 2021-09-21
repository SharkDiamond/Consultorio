const {Schema,model}=require("mongoose");

const Citas= Schema({

IdentificacionEnfermizo:{
type:String,
require:[true,"La identificacion del paciente es necesario!"]
},
Sintoma:{
type:String,
require:[true,"El Sintoma que presenta es necesario!"]
},
Fecha:{
type:Date,
require:[true,"La fecha de la cita es requerida"]
}


});


module.exports=model("Cita",Citas);