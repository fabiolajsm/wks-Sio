const http = require('http');
// 3rd party nodule, ws!
const webSocket = require('ws');

const server = http.createServer((req, res) => {
    res.end("I am connected!")
});

const wss = new webSocket.Server({ server }) // wss = web socket server

wss.on('headers', (headers, req) => {
    console.log(headers, 'headersssssss');
})

wss.on('connection', (ws, req) => {
    ws.send('Welcome to websocket server!')
    ws.on('message', (msg) => {
        console.log(msg, 'messageeeeeeeeeeeee');
    })
})

server.listen(8000);