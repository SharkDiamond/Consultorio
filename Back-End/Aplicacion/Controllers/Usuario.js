const encriptar=require("bcrypt");
const {request,response}=("express");
const {token}=require("../Helpers/GenerateJwt");



valideUsers=(req=request,res=response)=>{


   

    encriptar.compare(req.password,passwordUser,(resultado)=>{

        if (!resultado) return res.status(401).json({message:"Password Inconrrecto!"});
         
        return res.status(200).json({Enter:true,keys:token()});

    });


}

