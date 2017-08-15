var express = require('express'),
    app = express(),
    path = require('path'),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

server.listen(8080);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));    
});

//turn on a connection event with sockets.io from client
io.on('connection', function(socket){
    console.log('user connected');
    //send message data coming from client and emitted to users
    socket.on('send message', function(data){
        io.emit('new message', data);
    });
});
