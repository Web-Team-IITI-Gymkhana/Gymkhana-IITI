import React from "react";
import {Box, Paper, Typography} from "@mui/material";

const TeamCard = ({data}) => {
  return (
    <Paper>
      <Box borderRadius={4} padding={2} display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <img src={data.imageUrl} width={100} height={100} style={{borderRadius: '50%', marginBottom: 8}} alt={data.name}/>
        <Typography variant={'h6'} fontSize={18}>{data.name}</Typography>
        <Typography variant={'body1'}  fontSize={14}>{data.position}</Typography>
        <Typography variant={'body1'}  fontSize={14}>{data.email}</Typography>
      </Box>
    </Paper>
  )
}

export default TeamCard
