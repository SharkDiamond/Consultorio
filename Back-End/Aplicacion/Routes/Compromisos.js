const {Router}=require("express");
const {check}=require("express-validator");

const {compromisoCreate,compromisoDelete,compromisoGet}=require("../Controllers/Compromisos");
const {validateRequest}=require("../Helpers/validateRequest");
const{userExistPase}=require("../Helpers/UsersH");
const{chekoutToken}=require("../Midlewares/valideUsers");
const router=Router();


router.post("/CreateCompromiso",[check("UsuarioPerteneciente","El usuario no puede estar vacio!").notEmpty().custom(userExistPase),check("Nombre","El nombre del compromiso debe tener minimo 2 caracteres y maximo 20 caracteres!").isLength({min:2,max:30}),check("Fecha","La fecha es necesaria").not().isEmpty(),check("Hora","La hora es necesaria").not().isEmpty(),validateRequest,chekoutToken],compromisoCreate);

router.delete("/DeleteCompromiso",[check("idCompromiso","El id enviado no es valido!").isMongoId().notEmpty(),validateRequest,chekoutToken],compromisoDelete);

router.post("/GetCompromisos",[check("user","El usuario no puede venir vacio").not().isEmpty().custom(userExistPase),validateRequest,chekoutToken],compromisoGet);


module.exports=router;
