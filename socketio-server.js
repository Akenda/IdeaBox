let app = require('http').createServer()
let io = require('socket.io')(app);
let fs = require('fs');

app.listen(3000);


io.on('connection', function (socket) {
    console.log('New client is connected');


});