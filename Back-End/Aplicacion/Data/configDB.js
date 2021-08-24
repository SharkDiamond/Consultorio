const mongo=require("mongoose");



const Conexion=async ()=>{

    try {
      
        await mongo.connect("mongodb+srv://GabrielTiburon:wwwaaa12@cluster0.8kyiy.mongodb.net/Consultorio",{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false});
        console.log("Base De Datos Conectada");
    } 
    
        catch (error) {
            console.log("Hubo un error al conectarse");
            throw new Error("Hubo un error al conectarse:"+error);
    }



}


module.exports={Conexion};
