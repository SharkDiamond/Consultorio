const JWT=require("jsonwebtoken");

require('dotenv').config();


const token=()=>{
  
    return new Promise((resolve,reject)=>{
        
        //NO FUNCIONA LA IMPORTACION DEL KEYS DESDE EL ENV VERIFICAR

        console.log(process.env.KEYS);
        
        //FIRMANDO EL TOKEN
        JWT.sign({data:"Nada"},"M@NT30UI11@",{ expiresIn: '1h' },(err,token)=>{

            //SI OCURRE ALGUN ERROR
            if (err) reject("Hubo un error al generar el token:"+err);
            //DEVOLVIENDO EL TOKEN
            resolve(token);

        });

    });



}


module.exports={token};

