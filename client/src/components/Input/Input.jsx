import React from 'react'
import { Paper, IconButton } from '@mui/material'; 
import SendIcon from '@mui/icons-material/Send';
import './Input.css';

const Input = ({message,setMessage,sendMessage}) => {
  return (
   <form className='form'>
    <input 
      className='input'
      type ="text"
      placeholder='Type a Message...'
      value = {message} 
      onChange = {(e) => setMessage(e.target.value)} 
      onKeyDown = { (e) => e.key === 'Enter'? sendMessage(e) : null}
    />
    <Paper onClick = {(e) => sendMessage(e)} sx ={{ justifyContent : 'flex-end'}}>
      <IconButton sx = {{ p: '20px',  color: 'green' }}>
        <SendIcon />
      </IconButton>
    </Paper>
    
   </form>
  )
}

export default Input