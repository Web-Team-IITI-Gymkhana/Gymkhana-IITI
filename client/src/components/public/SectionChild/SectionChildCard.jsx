import React from 'react'
import { Box, Typography } from "@mui/material";
import './SectionChildCard.css'

const SectionChildCard = ({ sectionChild }) => {
    return (

        <Box gap={5} padding={3} className={'wrapper'}  >
            <img src={sectionChild.sectionChildImage} style={{ borderRadius: '50%' }} alt={sectionChild.sectionChildName} height={250}
                width={250} />
            <Box>
                <Typography variant={'h4'} marginBottom={1}>{sectionChild.sectionChildName}</Typography>
                <Typography variant={'body1'} marginBottom={2}>{sectionChild.sectionChildDesc}</Typography>
            </Box>
        </Box>
    )

}

export default SectionChildCard
