//Make connection
var socket = io.connect('http://localhost:4001')

//Query DOM
var message = document.getElementById('message')
var handle = document.getElementById('handle')
var btn = document.getElementById('send')
var output = document.getElementById('output')
var feedback = document.getElementById('feedback')

//Emit events
btn.addEventListener('click', function(){
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    })
})

//Message events
message.addEventListener('keypress', function(){
    socket.emit('typing', handle.value)
})

//Listen for events
socket.on('chat', function(data){
    feedback.innerHTML = ''
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>'
    message.value = ''
})

//Typing message events
socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>' + data + ' is typing message...</em></p>'
})