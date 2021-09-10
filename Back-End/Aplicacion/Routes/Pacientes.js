//IMPORTACIONES EXTERNAS
const {Router}=require("express");
const {check,validationResult}=require("express-validator");
//IMPORTACIONES INTERNAS
const {createPaciente,deletePaciente,getPacientes}=require("../Controllers/Pacientes");
const {chekoutToken}=require("../Midlewares/valideUsers");
const router=Router();

const validateRequest = async (req,response,next)=>{
    
    const error= await validationResult(req);
    
    const errorMessage=error.errors.map(element=>element.msg);
     
    if(!error.isEmpty()) return response.status(400).json({"Problems":errorMessage}); 
    
     next();
 
 }

//CREAR PACIENTES
router.post("/CreatePaciente",[check("Identificacion","La identificacion debe tener minimo 6 caracteres").isLength({min:6}),
check("Nombre","El nombre es necesario").not().isEmpty(),
check("Apellido","El apellido es necesario").not().isEmpty(),
check("FechaNacimiento","La fecha de nacimiento es necesaria").not().isEmpty()
,validateRequest,chekoutToken],createPaciente);

//ELIMINAR PACIENTES
router.delete("/DeletePaciente",[check("Identificacion","Es necesaria la identificacion del paciente").not().isEmpty(),validateRequest,chekoutToken],deletePaciente);

//OBTENER PACIENTES
router.get("/GetPacientes",[check("campo","El campo indicado no coincide!").isIn(["Nombre","Apellido","Identificacion","FechaNacimiento","Seguro"]),
                            check("dato","El dato enviado no puede estar vacio!").not().isEmpty(),validateRequest,chekoutToken],getPacientes);

                            
module.exports=router;