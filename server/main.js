const request = require('request');
const express = require('express');
const app = express();
const http = require("http")
const server = http.Server(app);
const key = require("./key")





const apiurl=""

//config
app.set('llave', config.llave);
//middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


server.listen(8080, function() {
        console.log('Servidor corriendo en http://localhost:8080');
});var io = require('socket.io')(server);

io.on('connection', function(socket) {
    socket.emit('guia','');
});
