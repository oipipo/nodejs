const request = require('request');
const express = require('express');
const app = express();
const http = require("http")
const server = http.Server(app);
const key = require("./key")
const bodyParser = require("body-parser")
const si = require('systeminformation');



const apiurl=""

//config
app.set('llave', key.key);
//middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


server.listen(8080, function() {
        console.log('Servidor corriendo en http://localhost:8080');
});var io = require('socket.io')(server);

io.on('connection', function(socket) {

    
        actualizar(socket)
        socket.on("actualizar",(data)=>
        {
            actualizar(socket)
        })
        
    
});

function actualizar(socket)
{
    si.mem()
    .then(data => {
        socket.emit("metrics",data);
        
    })
    .catch(error => console.error(error));
    

    setTimeout(function(){
        socket.emit('guia','');
    }, 1000);
}