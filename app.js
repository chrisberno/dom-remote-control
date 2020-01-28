const app = require('express')();
const http = require('http').Server(app);
const io = require ('socket.io')(http);
var express = require('express');

//Handling the routes
app.use(express.static('public'));

//Handling the sockets
io.on('connection', function(socket){
    setInterval(function(){
    	socket.emit('date', {'date': new Date()});
    });
    console.log('Someone Connected');
     socket.on('disconnect', function(){
        console.log('Someone Disconnected');
    });
  socket.on('trigger', function(){
 		console.log('Remote trigger sent');
 		socket.broadcast.emit("click");
  });

})
//server listening at 127.0.0.1:3004
http.listen(8989, function(){
    console.log("Listening on 8989");
})
