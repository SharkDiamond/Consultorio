const User=require("../Data/Users");

const userExist=async(user)=>{
    
    let searhUser=null;
    
    try{ searhUser=await User.find({Usuario:user}); }
    
    catch(error) { console.log(error.message);}

    if(searhUser.length>0)  throw new Error("El Nombre de Usuario ya existe!");

}

const userExistPase=async(user)=>{
    
    let searhUser=null;
    
    try{searhUser=await User.find({Usuario:user});}
    
    catch(error){console.log(error.message);}

    if(searhUser.length==0)  throw new Error("El usuario no existe!");
  
}




module.exports={userExist,userExistPase};