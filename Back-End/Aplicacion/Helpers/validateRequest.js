const {validationResult}=require("express-validator");


const validateRequest = async (req,response,next)=>{

    
    const error= await validationResult(req);
    
    const errorMessage=error.errors.map(element=>element.msg);
     
    if(!error.isEmpty()) return response.status(400).json({"Problems":errorMessage}); 
    
     next();
 
 }


module.exports={validateRequest};