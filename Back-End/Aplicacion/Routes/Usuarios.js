//EXPORTACIONES DE PAQUETES EXTERNOS
const {Router}=require("express");
const {check,validationResult }=require("express-validator");
//EXPORTACIONES INTERNAS
const {CreateUsers,TokenUser} = require("../Controllers/Usuario");
const {userExist}=require("../Helpers/UsersH");
const {valideuser}=require("../Midlewares/valideUsers");

const router=Router();

const validateRequest= async (req,response,next)=>{
    
   const error= await validationResult(req);
   
   const errorMessage=error.errors.map(element=>element.msg);
    
   if(!error.isEmpty()) return response.status(400).json({"Problems":errorMessage}); 
   
    next();

}

//CREACION DE USUARIOS
router.post("/CreateUsers",[check("Usuario","El usuario debe tener minimo 6 caracteres y maximo 20 caracteres!").isLength({min:6,max:20}).custom(userExist),
check("Password","La contraseña debe tener minimo 8 caracteres!").isLength({min:6,max:18}),
check("Nombre","El nombre debe de tener mas de 2 caracteres!").isLength({min:3,max:20}),
check("Apellido","El apellido debe tener mas de un caracter!").isLength({min:2,max:20}),
validateRequest],CreateUsers);

//INICIO DE SESION
router.post("/Users",[check("Usuario","El usuario no puede estar vacio!").not().isEmpty().isLength({min:6,max:20}).withMessage("El usuario debe tener minimo 6 caracteres y maximo 20 caracteres!"),
                      check("Password","El Password no puede estar vacio!").not().isEmpty().isLength({min:6,max:18}).withMessage("La contraseña debe tener minimo 8 caracteres!"),
                      validateRequest,valideuser],TokenUser);

//EXPORTANDO EL ROUTER
module.exports=router;

