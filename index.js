//importamos una libreria
//ES5
var http = require('node:http');

var PORT = 8080;

//3000 puerto de React
//4200 puerto de Angular
//57000 puerto de Vue
//8080 puerto de Spring
//3306 puerto de MySQL
//27000 puerto de MongoDB

var hostname = '127.0.0.1';

//creamos el server
var server = http.createServer((request, response) => {
    var date = new Date();
    response.statusCode = 200;

    response.setHeader('Content-Type', 'text/plain;charset=utf-8');

    if(date.getHours() >= 6 && date.getHours() < 12){
        response.end("¡Buenos días!");
    }else if(date.getHours() >= 13 && date.getHours() < 19){
        response.end("¡Buenas tardes!");
    }else if(date.getHours() >= 20 || date.getHours() < 5){
        response.end("¡Buenas noches!");
    }else{
        response.end('Hola mundo');
    }
});
//levantamos el server
server.listen(PORT, hostname, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
})