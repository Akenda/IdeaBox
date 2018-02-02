let app = require('http').createServer()
let io = require('socket.io')(app);

app.listen(3000);


io.on('connection', function (socket) {
    console.log('New client is connected');

    socket.on('insert_new_idea', (datas) => {
        console.log(datas);

        io.broadcasts.emit('new_idea_inserted', datas)
    })
});