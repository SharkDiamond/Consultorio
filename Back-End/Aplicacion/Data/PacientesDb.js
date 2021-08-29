const {Schema,model}=require("mongoose");

const Pacientes=new Schema({

Identificacion:{
Type:String,
unique:[true,"Ya existe un paciente con ese numero de identificacion!"]
},

Nombre:{
    Type:String,
    require:[true,"El nombre es necesario!"]
    
},
Apellido:{
Type:String,
require:[true,"El apellido es requerido!"]


},
FechaNacimiento:{
Type:Date,
require:[true,"La fecha de nacimiento es necesaria!"]


},
Condiciones:{
Type:String,
require:false
},
Seguro:{
Type:String,
require:false

}

});


module.exports=model("Paciente",Pacientes);
