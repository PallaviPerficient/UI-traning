const http = require('http');

//import
const routes = require('./route')
const server = http.createServer(routes.handler);

server.listen(3000);