var socket = io.connect('http://localhost:8080', { 'forceNew': true });

$( document ).ready(function() {
    
    var counter=0;
    var table = document.getElementById("myTable");

    
    
    $('#contador').html(counter);
    
        
    socket.on('guia', function(data) {
        counter+=1;
        $('#contador').html(counter);
        socket.emit("actualizar",counter)
    });

    socket.on("metrics",(data)=>
    {
        table.innerHTML = "";
        data=
        {
            "memoria_total":data.total,
            "memoria_libre":data.free,
            "memoria_usada":data.used,
        }
        var datos =[data];
        
        var columns = addAllColumnHeaders(datos, table);
        
        for (var i = 0; i < datos.length; i++) 
        {
            var row$ = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
            var cellValue = datos[i][columns[colIndex]];
            if (cellValue == null) cellValue = "";
            row$.append($('<td/>').html(cellValue));
            }
            $(table).append(row$);
        }
    })

    $("#boton").click(()=>{
        counter+=1;
        $('#contador').html(counter);
    })
});
function addAllColumnHeaders(myList, table) {
    var columnSet = [];
    var headerTr$ = $('<tr/>');
  
    for (var i = 0; i < myList.length; i++) {
      var rowHash = myList[i];
      for (var key in rowHash) {
        if ($.inArray(key, columnSet) == -1) {
          columnSet.push(key);
          headerTr$.append($('<th/>').html(key));
        }
      }
    }
    $(table).append(headerTr$);
  
    return columnSet;
  }