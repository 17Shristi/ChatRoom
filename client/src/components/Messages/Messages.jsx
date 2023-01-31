import React from 'react'
import { Box } from '@mui/material';
import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message/Message';
import './Messages.css';

const Messages = ({messages, name}) =>  (
    <ScrollToBottom className='messages'>
      {messages.map(( message, i) => (
             <Box key = {i}>
                  <Message message={message} name ={name} />
             </Box>
      ))}
    </ScrollToBottom>
)


export default Messages