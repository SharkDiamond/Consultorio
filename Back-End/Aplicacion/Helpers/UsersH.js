const User=require("../Data/Users");

const userExist=async(user)=>{

    try{
        
        const searhUser=await User.find({Usuario:user});

        if(searhUser.length>0)  throw new Error("El Nombre de Usuario ya existe!");

    }catch(error) {
        
        throw new Error(error);
        

    }

}


const userExistPase=async(user)=>{

    try{
       
        const searhUser=await User.find({Usuario:user});
      
        if(searhUser.length==0)  throw new Error("El usuario no existe!");

    }catch(error) {
        
        throw new Error(error);
        

    }

}




module.exports={userExist,userExistPase};