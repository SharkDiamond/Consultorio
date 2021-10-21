const Compromiso=require("../Data/CompromisosDb");

//CREATE COMPROMISO
const compromisoCreate=async(req,res)=>{

    try {
        
        const Item=new Compromiso(req.body);

        await Item.save();

        res.status(201).json("Compromiso Creado!").end();

    } catch (error) {
        
        res.status(500).json({Problems:"Ocurrio un problema en el servidor "+error.message}).end();

    }

}

//DELETE COMPROMISO
const compromisoDelete=async(req,res)=>{

try {
    
  await Compromiso.findByIdAndRemove(req.body.idCompromiso);

  res.status(202).json("Compromiso Removido").end();

} catch (error) {
    
    res.status(500).json({"Problems":"Ocurrio un problema en el servidor "+error.message}).end();

}


}

//GET COMPROMISO
const compromisoGet=async(req,res)=>{

    try {
        
      const data=await Compromiso.find({UsuarioPerteneciente:req.body.user});
           
    
      res.status(200).json(data).end();


    } catch (error) {

        res.status(500).json({"Problems":"Ocurrio un problema en el servidor "+error.message}).end();

        
    }



}




module.exports={compromisoCreate,compromisoDelete,compromisoGet};
