const mongoose,{Schema,model} =require("mongoose");
const Paciente=require("../Data/PacientesDb");

const Reportes=new Schema({

NombreReporte:{
Type:String,
require:[true,"El nombre del reporte es requerido"]

},
Fecha:{
Type:Date,
require:[true,"La fecha del reporte es requerido"]

},
IdentificacionPaciente:{
    
Type:Paciente.Identificacion,
require:[true,"La identificacion del paciente es requerida"]

},
Creador:{
Type:mongoose.Types.ObjectId,
require:[true,"El identificador del creador es requerido"]

}

});


module.exports=model("Reporte",Reportes);