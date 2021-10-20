const Cita=require("../Data/CitasDb");

//CREAR CITA
const CreateCita= async (req,res)=>{

    try {
        
        //CREANDO LA CITA
        const create=new Cita(req.body);

        //GUARDANDO LA CITA
        await create.save();

        res.status(203).json({Exito:"Se creo la cita exitosamente"}).end();

    } catch (error) {
        
        //RESPONDIENDO CON EL ERROR
        res.status(401).json({problems:"Hubo un error al crear la cita:"+error}).end();

    }
   
}

//ACTULIZAR CITA
const UpdateCita=async (req,res)=>{

    //OBTENIENDO INFORMACION DEL REQUEST
    const {id,...demas}=req.body;

    //CONVERTIENDO EL CAMPO A ACTUALIZAR EN UN ARREGLO
    const llavesCampo=Object.keys(demas);
    
    //CAMPOS DE LA COLECCION CITA
    const Campos=["IdentificacionEnfermizo","Sintoma","Fecha"];
    
    //COMPARACION EN DADO CASO QUE EL CAMPO QUE VIENE NO SEA CORRECTO
    if (!Campos.includes(llavesCampo[0])) return res.status(400).json({"Problems":"El campo que desea actualizar no coincide!"}).end();

        try {
        
        //BUSCANDO LA CITA Y ACTUALIZANDO SU INFORMACION
        await Cita.findOneAndUpdate({"_id":id},demas);
        
        //RESPONDIENDO INDICANDO QUE LA CITA FUE 
        res.status(200).json({"Message":"Cita Actualizada!"}).end();

    } catch (error) {
       
      //RESPONDIENDO EN CASO DE QUE LA CONEXION SE CAIGA  
      res.status(500).json({"Problems":"Ocurrio un problema con el servidor "+error.message});

    }

}

//ELIMINAR CITA
const DeleteCita=async (req,res)=>{

    try {
        
       const I=await Cita.findByIdAndDelete(req.body.id);
        
       console.log(I);

       res.status(200).json({respuesta:"Cita Eliminada!"}).end();

    } catch (error) {
        
        res.status(500).json({"Problems":"Ocurrio un problema con el servidor "}+error.message).end();

    }

}

//OBTENER CITAS
const GetCitas=async (req,res)=>{

    try {
        //HACIENDO LA CONSULTA DE TODAS LAS CITAS CON LA INFORMACION DE LOS PACIENTES INCLUIDA
        const dataGeneral=await Cita.aggregate([

            {
                $lookup:{

                    from:"pacientes",
                    localField:"IdentificacionEnfermizo",
                    foreignField:"Identificacion",
                    as:"PacienteData"

                    
                }

            },
            {
                $unwind:"$PacienteData"

            }




        ]);

        console.log(dataGeneral);
        //RECORRIENDO Y ORDENANDO DICHA INFORMACION COLOCANDO SOLO LO MAS IMPORTANTE
        const data=dataGeneral.map((element,index)=>{
       
            return {"Paciente":element["PacienteData"].Nombre+" "+element["PacienteData"].Apellido,"Sintomas":element.Sintoma,"Fecha":element.Fecha}

});

        

       //RESPONDIENDO CON LA INFORMACION ORGANIZADA
       res.status(200).json(data).end();

    } catch (error) {
        //EN CASO DE QUE HAYA UN ERROR
        res.status(500).json({"Problems":"Ocurrio un problema con el servidor "}+error.message).end();
    }

}

module.exports={CreateCita,UpdateCita,DeleteCita,GetCitas};