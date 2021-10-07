const express = require('express');
const app = express();
const socketio = require('socket.io');

app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(9000);
const io = socketio(expressServer);

io.on('connection', (socket) => {
    socket.emit("messageFromServer", { data: "welcome to socket, this is the first message from the server" });
    socket.on('messageToServer', (data) => {
        console.log(data, 'line 13, this is the message from the client!');
    })
})