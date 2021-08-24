const Usuario=require("../Data/Users");


const valideuser= async(req,res,next)=>{

    const {user,password}=req.body;

    try {

        const Ouser= await Usuario.findOne({nombre:user});
   
        const Pase = await encriptar.compare(password,Ouser.password);
        
        if (Pase) next();

    } catch (error){

        res.status(401).json({msj:"Usuario o Password incorrecto!"+error}).end();

    } 
        
  
}


module.exports={valideuser};