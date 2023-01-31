import React from 'react'
import { Box, Typography } from '@mui/material';
import './Message.css';

const Message = ({message : { user, text },name}) => {

  let isSentByCurrentUser = false;
 
  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName)
  {
     isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser ? (
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '0 5%', mt: '3px' }}>

         <Typography variant='caption' color='#828282' display='flex' align-items='center' paddingRight='10px' letterSpacing = '0.3px' >
          {trimmedName}
         </Typography>

         <Box className='messageBox' bgcolor= '#FCF9BE'>
           <Typography variant='body2' className='messageText' color='black' >
              {text}
           </Typography>
         </Box>
           
      </Box>

    ) 
    : (
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', padding: '0 5%', mt: '3px' }}>


         <Box className='messageBox' bgcolor='#f3f3f3'>
           <Typography variant='body2' className='messageText' color='black'>
              {text}
           </Typography>
         </Box>

         <Typography variant='caption' color='#828282' display='flex' align-items='center' paddingLeft='10px' letterSpacing = '0.3px'>
          {user}
         </Typography>
           
      </Box>

    )
  )
}


export default Message