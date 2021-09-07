const Cita=require("../Data/CitasDb");


const CreateCita= async (req,res)=>{

    try {
        
        //CREANDO LA CITA
        const create=new Cita(req.body);

        //GUARDANDO LA CITA
        await create.save();
    
    } catch (error) {
        
        //RESPONDIENDO CON EL ERROR
        res.status(401).json({problems:"Hubo un error al crear la cita:"+error}).end();

    }
   
}


module.exports={CreateCita};