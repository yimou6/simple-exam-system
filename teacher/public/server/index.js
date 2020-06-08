const express = require('express')()
const http = require('http').createServer(express)
const io = require('socket.io')(http)

express.get('/', (req, res) => {
  res.send('<p>提供服务中...</p>');
});

let list = []

io.on('connection', (socket) => {
  list.push(socket)
  console.log('a user is connection')
})

http.listen(2061, () => {
  console.log('listening on port 2061')
})
