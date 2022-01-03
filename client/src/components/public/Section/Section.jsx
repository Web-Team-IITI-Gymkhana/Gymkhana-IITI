import React from 'react'
import { Box, Paper, Typography } from "@mui/material";
import Carousel from 'react-material-ui-carousel'
import SectionChildCard from '../SectionChild/SectionChildCard';

const Section = ({ section }) => {

  console.log(section.sectionContent);

  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} paddingY={5} >

      {/*the heading, wrapped by two divs for skewing purposes*/}
      <Box paddingX={5} paddingY={1} border={1} sx={{ transform: 'skew(-20deg)' }} marginBottom={4}>
        <Box sx={{ transform: 'skew(20deg)' }}>
          <Typography variant={'h4'}>{section.sectionName}</Typography>
        </Box>
      </Box>

      {/*the carousel*/}
      <Paper sx={{ width: '90%', maxWidth: '1150px' }} elevation={3}>
        <Carousel autoPlay={false}>
          {section.sectionContent.map(sectionChild => <SectionChildCard key={sectionChild.sectionChildID} sectionChild={sectionChild} />)}
        </Carousel>
      </Paper>
    </Box>
  )
}

export default Section
