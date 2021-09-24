const Compromiso=require("../Data/CompromisosDb");

//CREATE COMPROMISO
const compromisoCreate=async(req,res)=>{

    try {
        
        const Compromiso=new Compromiso(req.body);

        Compromiso.save();

        res.status(201).json("Compromiso Creado!").end();

    } catch (error) {
        
        res.status(500).json({Problems:"Ocurrio un problema en el servidor "+error.message}).end();


    }



}

//DELETE COMPROMISO
const compromisoDelete=async(req,res)=>{

try {
    
  await Compromiso.findByIdAndRemove(req.body.id);

  res.status(202).json("Compromiso Removido").end();

} catch (error) {
    
    res.status(500).json({"Problems":"Ocurrio un problema en el servidor "+error.message}).end();

}


}

//GET COMPROMISO
const compromisoGet=async(req,res)=>{

    try {
        
      const data=await Compromiso.find({UsuarioPerteneciente:req.body.user});
            
      const {user,nombreCompromiso,fechaCompromiso}=data;
    
      res.status(200).json({nombreCompromiso,fechaCompromiso}).end();


    } catch (error) {

        res.status(500).json({"Problems":"Ocurrio un problema en el servidor "+error.message}).end();

        
    }



}




module.exports={compromisoCreate,compromisoDelete,compromisoGet};
