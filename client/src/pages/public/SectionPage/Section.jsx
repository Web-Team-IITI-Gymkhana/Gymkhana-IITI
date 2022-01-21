import React from 'react'
import {Box, Paper, Typography} from "@mui/material";
import SectionChildCard from '../../../components/public/SectionChild/SectionChildCard';

const Section = ({section}) => {

  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} paddingY={5} >

      <Box paddingX={5} paddingY={1} border={1} sx={{transform: 'skew(-20deg)'}} marginBottom={4}>
        <Box sx={{transform: 'skew(20deg)'}}>
          <Typography variant={'h4'}>{section.sectionName}</Typography>
        </Box>
      </Box>

      <Paper sx={{width: '90%', maxWidth: '1150px'}} elevation={3}>

          {section.sectionContent.map(sectionChild => <SectionChildCard key={sectionChild.sectionChildID} sectionChild={sectionChild}/>)}

      </Paper>
    </Box>
  )
}

export default Section
