const Cita=require("../Data/CitasDb");


const CreateCita= async (req,res)=>{

    try {
        
        //CREANDO LA CITA
        const create=new Cita(req.body);

        //GUARDANDO LA CITA
        await create.save();

        res.status(200).json({Exito:"Se creo la cita exitosamente"}).end();

    } catch (error) {
        
        //RESPONDIENDO CON EL ERROR
        res.status(401).json({problems:"Hubo un error al crear la cita:"+error}).end();

    }
   
}

const UpdateCita=async (req,res)=>{

    try {
        
        //const actualiza=await Cita.findOneAndUpdate({},{});


    } catch (error) {
        
    }

}


module.exports={CreateCita,UpdateCita};