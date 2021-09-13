//IMPORTACIONES EXTERNAS
const jwt=require("jsonwebtoken");


//EXPORTACIONES INTERNAS
const User=require("../Data/Users");
const Encriptar=require("bcrypt");



//PARA VALIDAR USUARIO Y PASSWORD
const valideuser= async(req,res,next)=>{
 
    //RESCATANDO LOS DATOS DEL BODY
    const {Usuario,Password}=req.body;

    try {
        
        //OBJECT USER DE MONGO DB
        const Ouser= await User.find({"Usuario":Usuario});
        
        //SI NO EXISTE EL USUARIO
        if (Ouser.length==0 || !Ouser.active) throw new Error("El usuario no existe!");
      
        //COMPARANDO EL PASSWORD ENCRIPTADO CON EL ENVIADO POR EL USUARIO
        const passwordResult=await Encriptar.compare(Password,Ouser[0].Password);

        //LANZANDO EL ERROR SI EL PASSWORD ES INCORRECTO
        if(!passwordResult) throw new Error("La contraseña es incorrecta!");
     
        //SI TODO SALE BIEN PUEDE ENTRAR
        next();

    } 
    
    catch (error){
        //RESPONDIEDO CON EL ERROR
         res.status(401).json({msj:""+error}).end();
    }

}


const chekoutToken=async(req,res,next)=>{
    
    const {token}=req.headers;
    
    try{

        const Token=jwt.verify(token,"M@NT30UI11@"); 
        
        next();

    }

    catch(error){

        //RESPONDIENDO EN EL CASO DE QUE HAYA UN PROBLEMA
        res.status(401).json({error:"Token no valido " + error.message}).end();

}


}


//EXPORTACION DE FUNCIONES
module.exports={valideuser,chekoutToken};