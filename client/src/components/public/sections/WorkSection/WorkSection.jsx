import {Box, Paper, Typography} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import React from "react";
import WorkCard from "../../cards/WorkCard/WorkCard";

const WorkSection = ({workCardsData}) => {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>

      {/*the heading, wrapped by two divs for skewing purposes*/}
      <Box paddingX={5} paddingY={1} border={1} sx={{transform: 'skew(-20deg)'}} marginBottom={4}>
        <Box sx={{transform: 'skew(20deg)'}}>
          <Typography variant={'h4'}>Work</Typography>
        </Box>
      </Box>

      {/*the carousel*/}
      <Paper sx={{width: '90%', maxWidth: '1150px'}} elevation={3}>
        <Carousel autoPlay={false}>
          {workCardsData.map(workCardData => <WorkCard key={workCardData.eventName} data={workCardData}/>)}
        </Carousel>
      </Paper>
    </Box>
  )
}

export default WorkSection
