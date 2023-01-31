import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography , Stack } from '@mui/material';
import './Join.css';


const Join = () => {
 
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <Box  sx={{
         height: '100vh', backgroundColor:'black', alignItems:'center',
         justifyContent: 'center', textAlign: 'center', display: 'flex'
    }}>
      <Box sx={{ width: '20%'}}>
      <Stack direction= "column" justifyContent="space-between" py= {1} px={2}>
        <Typography varaint = "h1" color = "#fff" fontWeight="bold" sx={{
          paddingBottom: '10px',  borderBottom: '2px solid #fff' , fontSize: '2.5em'
          }}>
           Join 
        </Typography>
        <br></br>
        <Box>
          <input placeholder='Name' className='joinInput'
                 type='text' onChange={(e) => setName(e.target.value) }/>
        </Box>
        <Box>
          <input placeholder='Room' className='joinInput mt-20'
                 type='text' onChange={(e) => setRoom(e.target.value) }/>
        </Box>
        <Box>
            <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to = {`/chat?name=${name}&room=${room}`} >
                <button className='button mt-20' type="submit" >Sign In</button>
            </Link>
        </Box>
       
      </Stack>
      </Box>

    </Box>
  )
}

export default Join