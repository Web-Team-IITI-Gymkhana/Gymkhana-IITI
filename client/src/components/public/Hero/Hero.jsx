import { Box, Typography } from '@mui/material'
import { height } from '@mui/system'
import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>

      {/*the heading, wrapped by two divs for skewing purposes*/}
      <img className='bg' src="bg.jpg" alt="" />

    </Box>
  )
}
