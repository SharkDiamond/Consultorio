const Server = require('./Aplicacion/Models/Server');
require('dotenv').config();

const server=new Server();

console.log(process.env.DB_HOST);
server.Escuchar();
