import React from "react";
import {Box, Typography} from "@mui/material";
import TeamCard from "../../cards/TeamCard/TeamCard";

const TeamSection = ({teamCardsData}) => {
  return (
    <Box padding={2} display={"flex"} flexDirection={"column"} alignItems={"center"}>

      {/*the heading, wrapped by two divs for skewing purposes*/}
      <Box paddingX={5} paddingY={1} border={1} sx={{transform: 'skew(-20deg)'}} marginBottom={4}>
        <Box sx={{transform: 'skew(20deg)'}}>
          <Typography variant={'h4'}>Team</Typography>
        </Box>
      </Box>

      <Box display={"flex"} gap={2} flexWrap={"wrap"} justifyContent={"center"}>
        {teamCardsData.map(teamSectionData => <TeamCard key={teamSectionData.name} data={teamSectionData}/>)}
      </Box>
    </Box>
  )
}

export default TeamSection
