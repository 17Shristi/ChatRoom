import React from 'react'
import './InfoBar.css';
import { Box, IconButton , Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CircleIcon from '@mui/icons-material/Circle';


const InfoBar = ({room}) => {
  return (
    <Box className = "infoBar">
      <Box className = "leftInnerContainer">
       <IconButton sx = {{ mr: '5%' , color: 'green' }}>
        <CircleIcon/>
       </IconButton>
       <Typography color = "black" varaint= "h3" fontWeight= "bold">
                  {room}
       </Typography>
         

       </Box>
       <Box  className = "rightInnerContainer">
       <IconButton href ="/">
        <CloseIcon />
      </IconButton>
       </Box>
    </Box>
  )
}

export default InfoBar