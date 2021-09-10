const Paciente=require("../Data/PacientesDb");

//PARA CREAR PACIENTES
const createPaciente=async(req,res)=>{

    try {
        
        const nPaciente=await Paciente(req.body);

        await nPaciente.save();

        res.status(201).json({"result":"Paciente "+req.body.Nombre+" Creado!"}).end();

    } catch (error) {
        
        const errorEspecif=error.message.split(":");
        
       //MANEJANDO EL ERROR DE LLAVE DUPLICADA 
      if(errorEspecif[0]=='E11000 duplicate key error collection') res.status(401).json({Problems:"Ya existe un paciente con esa identificacion!"}).end();

    }

}


const deletePaciente=async(req,res)=>{

    try{

      const objectDelete= await Paciente.deleteOne({"Identificacion":req.body.Identificacion});
      
      if(objectDelete.n==0) throw new Error("No existe un paciente con esa identificacion!");

      res.status(200).json({"mensaje":"Paciente Eliminado!"}).end();

    }

    catch(error){

        res.status(500).json({Problems:error.message}).end();

    }

}
 
const getPacientes=async(req,res)=>{
    
    try {
        
        const {campo,dato}=req.body;

        const object={};

        object[campo]={$regex:dato+'.*'};

        const data=await Paciente.find(object);

        res.status(200).json(data).end();

    } 
    
    catch (error) {
        res.status(500).json({Problems:error.message}).end();
    }

}


module.exports={createPaciente,deletePaciente,getPacientes};