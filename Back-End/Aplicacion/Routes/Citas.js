//IMPORTACIONES DE PAQUETES
const {Router}= require("express");
const {check}= require("express-validator");
//IMPORTACIONES INTERNAS
const {CreateCita,UpdateCita}=require("../Controllers/Citas");
const {chekoutToken}=require("../Midlewares/valideUsers");
const {validateRequest}=require("../Helpers/validateRequest");
const {findCitaForId}=require("../Helpers/findDataCustom");

const router=Router();

//CREAR CITA
router.post("/CreateCita",[check("IdentificacionEnfermizo","La identificacion del paciente es necesario!").not().isEmpty(),
                           check("Sintoma","El Sintoma que presenta es necesario!").not().isEmpty(), 
                           check("Fecha","La fecha de la cita es requerida").not().isEmpty(),validateRequest,chekoutToken],CreateCita);

//ACTUALIZAR CITA
router.put("/UpdateCita",[check("id","El id no es correcto!").isMongoId().custom(findCitaForId),validateRequest,chekoutToken],UpdateCita);


//ELIMINAR CITA

//OBTENER CITAS

module.exports=router;

