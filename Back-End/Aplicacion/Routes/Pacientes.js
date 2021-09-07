//IMPORTACIONES EXTERNAS
const {Router}=require("express");
//IMPORTACIONES INTERNAS
const {createPaciente}=require("../Controllers/Pacientes");

const router=Router();

router.post("/CreatePaciente",createPaciente);


module.exports=router;

