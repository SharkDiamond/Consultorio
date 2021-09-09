//IMPORTACIONES EXTERNAS
const {Router}=require("express");
const {check,validationResult}=require("express-validator");
//IMPORTACIONES INTERNAS
const {createPaciente,deletePaciente}=require("../Controllers/Pacientes");
const {chekoutToken}=require("../Midlewares/valideUsers");
const router=Router();

const validateRequest = async (req,response,next)=>{
    
    const error= await validationResult(req);
    
    const errorMessage=error.errors.map(element=>element.msg);
     
    if(!error.isEmpty()) return response.status(400).json({"Problems":errorMessage}); 
    
     next();
 
 }


router.post("/CreatePaciente",[check("Identificacion","La identificacion debe tener minimo 6 caracteres").isLength({min:6}),
check("Nombre","El nombre es necesario").not().isEmpty(),
check("Apellido","El apellido es necesario").not().isEmpty(),
check("FechaNacimiento","La fecha de nacimiento es necesaria").not().isEmpty()
,validateRequest,chekoutToken],createPaciente);


router.delete("/DeletePaciente",[check("Identificacion","Es necesaria la identificacion del paciente").not().isEmpty(),validateRequest,chekoutToken],deletePaciente);



module.exports=router;