var socket = io.connect('http://localhost:8080', { 'forceNew': true });
$( document ).ready(function() {

    var counter=0;
    
    $('#contador').html(counter);
    
        
    socket.on('guia', function(data) {
        counter+=1;
        $('#contador').html(counter);
    });

    $("#boton").click(()=>{
        counter+=1;
        $('#contador').html(counter);
    })
});