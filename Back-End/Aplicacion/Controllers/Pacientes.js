const Paciente=require("../Data/PacientesDb");

//PARA CREAR PACIENTES
const createPaciente=async(req,res)=>{

    try {
        
        const nPaciente=await Paciente(req.body);

        await nPaciente.save();

        res.status(201).json({"result":"Paciente"+req.body.Nombre+" Creado!"}).end();

    } catch (error) {
        
        res.status(401).json({Problems:"Hubo un problema al crear el paciente"+error}).end();

    }

}



module.exports={createPaciente};