var express = require('express'),
    app = express(),
    path = require('path'),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);
    usernames = {}; //array to store usernames

server.listen(8080);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));    
});

//turn on a connection event with sockets.io from client
io.on('connection', function(socket){
    console.log('user connected');

    socket.on('new user', function(data, callback){
        //if name already exists in the array return false 
        if (data in usernames){
            callback(false)
        } 
        // else push to names array
        else {
            callback(true);
            socket.name = data;
            usernames[socket.name] = socket;
            io.emit('username', Object.keys(usernames));
        }
    });

    //send message data coming from client and emitted to users
    socket.on('send message', function(data){
        io.emit('new message', {message:data, usr:socket.name});
    });

         //when user disconnects from the server
    socket.on('disconnect', function(data){
        if (!socket.name) return; //if name not set, disoconnect!
        //remove the disconnected user
        delete users[socket.name];
        io.emit('username', Object.keys(usernames))
    });
});
