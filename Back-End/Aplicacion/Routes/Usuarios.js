const {Router}=require("express");
const {check}=require("express-validator");


const {CreateUsers,TokenUser} = require("../Controllers/Usuario");
const {valideuser}=require("../Midlewares/valideUsers");

const app=Router();

/*
app.post("/CreateUser",[check("Name","El nombre no puede estar vacio").not().isEmpty().custom(),
check("Password").not().isEmpty()]);
*/

app.post("/Users",[check("User","El usuario no puede estar vacio").not().isEmpty(),
                   check("Password","El usuario no puede estar vacio").not().isEmpty(),
                   valideuser
],TokenUser);
