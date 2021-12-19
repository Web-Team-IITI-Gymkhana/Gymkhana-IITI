import React from 'react'
import {Box, Paper, Typography} from "@mui/material";
import EventCard from "../../cards/EventCard/EventCard";
import Carousel from 'react-material-ui-carousel'

const EventsSection = ({eventCardsData}) => {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>

      {/*the heading, wrapped by two divs for skewing purposes*/}
      <Box paddingX={5} paddingY={1} border={1} sx={{transform: 'skew(-20deg)'}} marginBottom={4}>
        <Box sx={{transform: 'skew(20deg)'}}>
          <Typography variant={'h4'}>Events</Typography>
        </Box>
      </Box>

      {/*the carousel*/}
      <Paper sx={{width: '90%', maxWidth: '1000px'}} elevation={4}>
        <Carousel autoPlay={false}>
          {eventCardsData.map(eventCardsData => <EventCard key={eventCardsData.eventName} data={eventCardsData}/>)}
        </Carousel>
      </Paper>
    </Box>
  )
}

export default EventsSection
