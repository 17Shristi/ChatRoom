const express = require('express');
const  socketio = require('socket.io');
const http = require('http');

const { addUser, removeUser, getUser, getUsersInRoom} = require('./user');

const PORT  = process.env.PORT || 5000
const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server,{cors: {
    origin: "*",
    methods: ["GET", "POST"],
  }
});

app.use(router);

io.on('connection',(socket) => {
   socket.on('join',({name,room},callback)=> {
      const { error, user } = addUser({id: socket.id, name, room});

      if(error) return callback(error);

      socket.emit('message',{ user: 'admin', text: `${user.name}, Welcome to the Room ${user.room}`});
      socket.broadcast.to(user.room).emit('message',{ user: 'admin', text: `${user.name} has joined the room!!`});
      socket.join(user.room);

      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});

      callback();

   });

   socket.on('sendMessage', (message,callback) => {

       const user = getUser(socket.id);
       io.to(user.room).emit('message', { user: user.name, text: message});
       
       io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
       callback();

   });

   socket.on('disconnect',() => {

     const user = removeUser(socket.id);
     console.log("user has left!!");

     if(user)
     {
        io.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left!` });
        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
     }
   })
});



server.listen(PORT, ()=>{
    console.log(`Server has started on port ${PORT}`)
});
