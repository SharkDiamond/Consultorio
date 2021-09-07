//IMPORTACIONES INTERNAS
const Server = require('./Aplicacion/Models/Server');

//CREANDO EL OBJETO SERVER
const server=new Server();

//ESCUCHANDO EN EL PUERTO
server.Escuchar();
