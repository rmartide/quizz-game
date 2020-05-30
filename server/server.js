const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const reload = require('reload');

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

const publicPath = path.join(__dirname, '/../static');
const port = process.env.PORT || 3001;

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');
    socket.on('topkek', (params, callback) => {
        console.log('kekeando');
        callback('yap');
    })
});

reload(app);

server.listen(port, () => console.log(`Express listening to port ${port}`));