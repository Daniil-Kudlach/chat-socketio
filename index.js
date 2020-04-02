const app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket)=>{
  console.log('user connect');
  socket.on('disconnect', (e)=>{
    console.log('user disconnect');
  });
    socket.on('chat message', (msg)=>{
      io.emit('chat message', msg)
    })
});

http.listen(80, ()=>{
    console.log('server start');
});
