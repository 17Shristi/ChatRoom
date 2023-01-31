import React from 'react'
import { Box, IconButton, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

import './DisplayUsers.css';

const DisplayUsers = ({ users }) => {
  return (
     <Box className='textContainer'>
        <Typography varaint='h1' fontWeight='bold'>
             Real Time Chat Application
        </Typography>
       {
        users ? ( <Box>
             <Typography varaint="h2">
                   People in this room:
             </Typography>
             <Box sx= {{
              alignItems:'center', display: 'flex', mb:'50%'
             }}>
              <h5>
                {users.map(({name}) => (
                  <Box key ={name} sx={{
                    display:'flex', alignItems:'center'
                   }}>
                   {name}
                   <IconButton size='small' sx = {{ mr: '5%' , color: 'green' }}>
                      <CircleIcon/>
                   </IconButton>

                  </Box>
                ))}
              </h5>
              

             </Box>
        </Box>

        ) : null
       }

     </Box>
  )
}

export default DisplayUsers