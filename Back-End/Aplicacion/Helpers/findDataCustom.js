const Cita=require("../Data/CitasDb");



const findCitaForId= async(id)=>{

    try {
        
        const Cit=await Cita.findById(id);

        if(Cit==undefined) throw new Error("La Cita No Existe!");

    } catch (error) {
        
        return  error.message;
      
    }

}


module.exports={findCitaForId};

