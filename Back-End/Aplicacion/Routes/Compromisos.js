const {Router}=require("express");

const {compromisoCreate,compromisoDelete,compromisoGet}=require("../Controllers/Compromisos");


const router=Router();


router.post("",[],compromisoCreate);

router.delete("",[],compromisoDelete);

router.get("",[],compromisoGet);


module.exports=router;
