import React from "react";
import {Box, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const WorkCard = ({data}) => {
  return <Box gap={5} padding={4} className={'wrapper'}>
    <img src={data.imageUrl} style={{borderRadius: '50%'}} alt={'Event Image'} height={200}
         width={200}/>
    <Box>
      <Typography variant={'h4'} marginBottom={1}>{data.projectName}</Typography>
      <Typography variant={'body1'} marginBottom={2}>{data.projectDescription}</Typography>
      <Link to={data.buttonLink}
            style={{
              color: 'black',
              textDecoration: 'none',
              width: '120px',
              height: '40px',
              backgroundColor: '#cccccc',
              padding: '5px 10px',
              borderRadius: '4px',
            }}>{data.buttonText}</Link>
    </Box>
  </Box>
}

export default WorkCard
