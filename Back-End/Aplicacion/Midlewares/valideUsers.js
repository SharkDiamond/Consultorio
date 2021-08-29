
//EXPORTACIONES INTERNAS
const User=require("../Data/Users");

//PARA VALIDAR SI EL USUARIO EXISTE
const valideuser= async(req,res,next)=>{
    
    //RESCATANDO LOS DATOS DEL BODY
    const {Usuario,Password}=req.body;

    try {
        
        //OBJECT USER 
        const Ouser= await User.find({"Usuario":Usuario});
        //SI NO EXISTE EL USUARIO
        if (Ouser.length==1) throw new Error("El usuario ya existe!");
      
        //SI TODO SALE BIEN
        next();

    } 
    
    catch (error){
        //RESPONDIEDO CON EL ERROR
         res.status(401).json({msj:""+error}).end();
    }

}

//EXPORTACION DE FUNCIONES
module.exports={valideuser};