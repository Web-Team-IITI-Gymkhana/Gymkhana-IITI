import { Box} from '@mui/material'
import React from 'react'
import './Hero.css'

export default function Hero({userProfile}) {
  return (
    <Box paddingBottom={5} display={"flex"} flexDirection={"column"} alignItems={"center"}>

      {/*the heading, wrapped by two divs for skewing purposes*/}
      <img className='bg' src={userProfile.src} alt="" />

    </Box>
  )
}
