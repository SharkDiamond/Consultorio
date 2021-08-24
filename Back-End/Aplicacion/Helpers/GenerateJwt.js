const JWT=require("jsonwebtoken");

require('dotenv').config();


const token=()=>{


    return new Promise((resolve,reject)=>{


        JWT.sign({data:"Nada"},process.env.KEYS,{ expiresIn: '1h' },(err,token)=>{

            if (err) reject("Hubo un error al generar el token:"+err);
            
            resolve(token);

        });



    });



module.exports={token};



    



}