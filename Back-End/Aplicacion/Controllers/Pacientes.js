const Paciente=require("../Data/PacientesDb");

//PARA CREAR PACIENTES
const createPaciente=async(req,res)=>{

    try {
        
        const nPaciente=await Paciente(req.body);

        await nPaciente.save();

        res.status(201).json({"result":"Paciente "+req.body.Nombre+" Creado!"}).end();

    } catch (error) {
        
        //CONVIRTIENDO EL ERROR A CADENA
        const errorSpecific=""+error;
        
       //MANEJANDO EL ERROR DE LLAVE DUPLICADA 
       if(errorSpecific.split(" ")[9]=='dup') res.status(401).json({Problems:"Ya existe un paciente con esa identificacion!"}).end();

    }

}



module.exports={createPaciente};