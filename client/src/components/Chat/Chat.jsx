import React, { useState, useEffect} from 'react';
import { Box } from '@mui/material';
import { useSearchParams } from 'react-router-dom'; 
import io from 'socket.io-client';

import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import DisplayUsers from '../DisplayUsers/DisplayUsers';
import './Chat.css';

let socket;

const Chat = () => {

  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const [searchParams] = useSearchParams();
  const ENDPOINT = 'localhost:5000';

  useEffect(()=> {
    const name = searchParams.get("name");
    const room = searchParams.get("room");

    socket = io(ENDPOINT);
    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, () => {

    });

    return() => {
      socket.emit('disconnect');
      
      socket.off();
    }
  },[ENDPOINT, searchParams]); 


  useEffect(() => {

    socket.on('message', (message) => {
      setMessages([...messages,message]);
    })

    socket.on('roomData', ( {users}) => {
      setUsers(users);
    })
    
  }, [messages]);


 const sendMessage  = (event) => {
 
  event.preventDefault();
  
  if(message) {
    socket.emit('sendMessage', message, () => setMessage(''));
  }
 };

  

  return (
    <Box  sx={{
      height: '100vh', backgroundColor:'black', alignItems:'center',
      justifyContent: 'center', display: 'flex'
     }}>

      <Box className = "container">
         <InfoBar room = {room} />
         <Messages messages={messages} name= {name} />
         <Input message= {message} setMessage= {setMessage} sendMessage={sendMessage}/>
        
      </Box>

      <DisplayUsers users = {users} />

    </Box>
  )
}

export default Chat