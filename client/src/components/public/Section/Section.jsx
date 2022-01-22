import React from 'react'
import { Box, Paper, Typography } from "@mui/material";
import Carousel from 'react-material-ui-carousel'
import SectionChildCard from '../SectionChild/SectionChildCard';

const Section = ({ section }) => {

  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} paddingY={5} >

      {/*the heading, wrapped by two divs for skewing purposes*/}
      <Box paddingX={5} paddingY={1} border={2} sx={{ transform: 'skew(-15deg)' }} marginBottom={4}>
        <Box sx={{ transform: 'skew(15deg)' }}>
          <Typography variant={'h5'} fontWeight={'bold'} fontFamily={'arial'}>{section.sectionName}</Typography>
        </Box>
      </Box>

      {/*the carousel*/}
      <Paper sx={{ width: '90%', maxWidth: '1150px' }} elevation={3}>
        <Carousel autoPlay={false}>
          {section.sectionContent.map(sectionChild => 
            <SectionChildCard 
              key={sectionChild.sectionChildID}
              sectionName={section.sectionName} 
              sectionChild={sectionChild} />)
          }
        </Carousel>
      </Paper>
    </Box>
  )
}

export default Section
