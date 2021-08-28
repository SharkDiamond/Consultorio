//EXPORTACIONES DE PAQUETES EXTERNOS
const encriptar=require("bcrypt");
//EXPORTACIONES INTERNAS
const {token}=require("../Helpers/GenerateJwt");
const Usuario=require("../Data/Users");

//CREACION DEL USUARIO
const CreateUsers= async (req,res)=>{

    try {
        
        let passwordEncriptado=encriptar.hashSync(password,10);

        req.body.password=passwordEncriptado;

        const newusuario=new Usuario(req.body);

        await newusuario.save();

        res.status(201).json({msj:"Usuario "+req.body.Usuario+" Creado!"}).end();
    
    } catch (error) {
        
        res.status(400).json({msj:"Hubo un problema al crear el nuevo usuario "+error}).end();
       
    }
   
}

//DEVOLUCION DE TOKEN AL USUARIO CUANDO LAS VALIDACIONES SALGAN BIEN
const TokenUser =(req,res)=>{

  res.status(200).json({Enter:true,keys:token()});

}

//EXPORTACION DE FUNCIONES
module.exports={CreateUsers,TokenUser};
