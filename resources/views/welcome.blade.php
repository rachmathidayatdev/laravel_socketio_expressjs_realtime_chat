<html>
<head>
    <meta charset="utf-8">
    <title>Websocket Chat</title>
    <link href="{{ asset('assets/style.css') }}" rel="stylesheet"/>
</head>
<body>
<div id="mario-chat">
    <div id="chat-window">
        <div id="output"></div>
        <div id="feedback"></div>
    </div>
    <input id="handle" type="text" placeholder="Handle"/>
    <input id="message" type="text" placeholder="Message"/>
    <button id="send">Send</button>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.js"></script>
<script src="{{ asset('assets/chat.js') }}"></script>
</body>
</html>