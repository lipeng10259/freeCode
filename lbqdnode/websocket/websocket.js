
const express = require('express');
const wsio = require('nodejs-websocket');

const app = express();

var ws = wsio.attach(app);

app.use(express.static('public'))

ws.on('connection' , function (socket) {

    console.log(socket)
    socket.on('message' , function (msg) {
        socket.send('pong')
    })

})


app.listen(3000)