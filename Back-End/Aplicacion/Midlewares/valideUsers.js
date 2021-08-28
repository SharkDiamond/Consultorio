//EXPORTACIONES DE PAQUETES EXTERNOS
const encriptar=require("bcrypt");
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
        if (Ouser==null || Ouser==undefined || Ouser.length==0) throw new Error("El usuario no existe!");
      
        //VALIDANDACION DE CONTRASEÑAS
        const Pase = await encriptar.compare(Password,Ouser.Password);
        
        //SI LA CONTRASEÑA ES INCORRECTA
        if(!Pase) throw new Error("Password incorrecto!");

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