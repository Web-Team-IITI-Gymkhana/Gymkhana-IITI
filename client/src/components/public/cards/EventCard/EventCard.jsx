import React from 'react'
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import './EventCard.css'

const EventCard = ({ sectionChild }) => {
  return(

    <Box gap={5} padding={3} className={'wrapper'}  >
    <img src={sectionChild.sectionChildImage} style={{ borderRadius: '50%' }} alt={'Event Image'} height={250}
      width={250} />
    <Box>
      <Typography variant={'h4'} marginBottom={1}>{sectionChild.sectionChildName}</Typography>
      <Typography variant={'body1'} marginBottom={2}>{sectionChild.sectionChildDesc}</Typography>
      {/* <Link to={data.buttonLink}
        style={{
          color: 'black',
          textDecoration: 'none',
          width: '120px',
          height: '40px',
          backgroundColor: '#cccccc',
          padding: '5px 10px',
          borderRadius: '4px',
        }}>{data.buttonText}</Link> */}
    </Box>
  </Box>
  )

}

export default EventCard
