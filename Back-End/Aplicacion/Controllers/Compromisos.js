const Compromiso=require("../Data/CompromisosDb");

//CREATE COMPROMISO
const compromisoCreate=async(req,res)=>{

    try {
        
        const Item=new Compromiso(req.body);

        await Item.save();

        res.status(201).json("Compromiso Creado!").end();

    } catch (error) {
        console.log(error.message);
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
        
        
        let DiaHoy=new Date();
        

      const data=await Compromiso.find({UsuarioPerteneciente:req.body.user});
      console.log("Dia de hoy",DiaHoy.toLocaleDateString());
        let fechacompleta=data[6].Fecha.toLocaleDateString().split("/");
      let dia= data[6].Fecha.toLocaleDateString().split("/")[1];
     let k= parseInt(dia)+1;
        console.log("Base de datos",fechacompleta[0]+"/"+k+"/"+fechacompleta[2]);
      
        
      res.status(200).json(data).end();


    } catch (error) {

        res.status(500).json({"Problems":"Ocurrio un problema en el servidor "+error.message}).end();

        
    }



}




module.exports={compromisoCreate,compromisoDelete,compromisoGet};
