const mongo=require("mongoose");



const Conexion=async ()=>{

    try {
      
        //CONECTANDO A LA BASE DE DATOS
        await mongo.connect("mongodb+srv://GabrielTiburon:wwwaaa12@cluster0.8kyiy.mongodb.net/Consultorio",{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false});
        
        //INDICANDO EL MENSAJE EN CONSOLA
        console.log("Base De Datos Conectada");
    } 
    
        //SI HAY UN ERROR EN LA CONEXION
        catch (error) {
            //SE IMPRIME EN CONSOLA
            console.log("Hubo un error al conectarse");
            //DISPARANDO EL ERROR
            throw new Error("Hubo un error al conectarse:"+error);
    }



}

//EXPORTANDO LA CONEXION
module.exports={Conexion};
