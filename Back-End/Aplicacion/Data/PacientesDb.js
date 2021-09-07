const {Schema,model}=require("mongoose");

const Pacientes=Schema({

Identificacion:{
    type:String,
    require:[true,"La identificacion del paciente es necesario!"],
    unique:[true,"Ya existe un paciente con ese numero de identificacion!"]
},

Nombre:{
    type:String,
    require:[true,"El nombre es necesario!"]
},
Apellido:{
    type:String,
    require:[true,"El apellido es requerido!"]
},
FechaNacimiento:{
    type:Date,
    require:[true,"La fecha de nacimiento es necesaria!"]
},
Condiciones:{
    type:String,
    require:false
},
Seguro:{
    type:String,
    require:false
}

});


module.exports=model("Paciente",Pacientes);
