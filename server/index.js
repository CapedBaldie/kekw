const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    //origin: "http://localhost:3000",
    origin: "https://kekw-chat-app.netlify.app",
    methods: ["GET", "POST"]
  }
});

server.listen(process.env.PORT || 3000 , () => {
  console.log('listening on *:8080');
});

app.get('/', (req, res) => {
  res.send("Hello");
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  //socket.emit('connection', null);
  socket.on('chat message', (msg, user) => {
    // console.log('message: ' + msg);
    // console.log('user: ' + user);
    io.emit('new message', msg, user);
  });
});

