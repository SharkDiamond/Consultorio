const encriptar=require("bcrypt");
const {request,response}=("express");

const {token}=require("../Helpers/GenerateJwt");
const Usuario=require("../Data/Users");

const CreateUsers= async (req,res)=>{

    try {
        
        const {name,password}=req.body;

        let passwordEncriptado=encriptar.hashSync(password,10);

        const newusuario=new Usuario(name,passwordEncriptado);

        await newusuario.save();

        res.status(201).json({msj:"Usuario "+req.body.nombre+" Creado!"}).end();
    
    } catch (error) {
        
        res.status(400).json({msj:"Hubo un problema al crear el nuevo usuario "+error}).end();
       
    }
   
}

const TokenUser = async (req=request,res=response)=>{

   res.status(200).json({Enter:true,keys:token()});

}

module.exports={CreateUsers,TokenUser};
