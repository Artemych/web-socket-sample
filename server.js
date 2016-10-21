var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var config = require('./public/config');

console.log("Trying to start server with config:", config.serverip + ":" + config.serverport);

app.get('/', function(req, res) {
	res.sendFile(path.resolve(__dirname + '/public/index.html'));
});

app.get('/api/config', function(req, res) {
	res.send('var config = ' + JSON.stringify(config));
});

app.get('*', function(req, res){
    res.sendStatus(404);
});

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket) {
	console.log('a user connected: ' + socket.id);
	socket.on('disconnect', function() {
    	console.log('user disconnected: ' + socket.id);
	});
  	socket.on('command', function(cmd) {
  		console.log('recieved command: ' + cmd + ' from user: ' + socket.id);
    	socket.broadcast.emit('command', cmd);
  	});
});

http.listen(config.serverport, config.serverip, function() {
	console.log("Server running @ http://" + config.serverip + ":" + config.serverport);
});