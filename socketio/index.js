var express = require('express')
var socket = require('socket.io')

//App setup
var app = express()
var server = app.listen(4001, function(){
    console.log('listening to request on port 4001')
})

//Socket setup
var io = socket(server)

io.on('connection', function(socket){
    console.log('made socket connection', socket.id)

    socket.on('chat', function(data){
        io.sockets.emit('chat', data)
    })

    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data)
    })
})