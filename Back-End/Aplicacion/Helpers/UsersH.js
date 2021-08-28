const User=require("../Data/Users");

const userExist=async(user)=>{

    try {
        
        const searhUser=await User.find({Usuario:user});

        if(searhUser.length>0)  throw new Error("El Usuario ya existe!");

    } catch (error) {
        
        console.log(error);

    }




}

module.exports={userExist};