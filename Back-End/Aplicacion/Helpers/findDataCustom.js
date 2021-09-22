const Cita=require("../Data/CitasDb");



const findCitaForId= async(id)=>{
    
    let Cit=null;

    try { Cit=await Cita.findById(id);}
    
    catch (error) { console.log(error.message);}
    
    if(Cit==undefined || Cit==null) throw new Error("La Cita No Existe!");
    
   
}


module.exports={findCitaForId};

