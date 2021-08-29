const mongoose,{Schema,model}=require("mongoose");
const Paciente=require("../Data/PacientesDb");


const Citas=new Schema({

Enfermizo:{
Type:Paciente.Identificacion,
require:[true,"El paciente de la cita es requerido!"]
},
Sintoma:{
Type:String,
require:[true,"El Sintoma que presenta es necesario!"]
},
Fecha:{
Type:Date,
require:[true,"La fecha de la cita es requerida"]

}


});


module.exports=model=("Cita",Citas);