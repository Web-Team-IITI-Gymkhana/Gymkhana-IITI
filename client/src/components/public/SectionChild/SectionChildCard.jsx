import React from 'react'
import { Box, Typography, List, ListItem, Paper } from "@mui/material";
import '../public.css'
import { sectionsChildSchema } from '../../../schema';

const SectionChildCard = ({ sectionChild, sectionName }) => {
    return (
        <Paper sx={{ maxWidth: '320px', zIndex: 10, borderRadius: '25px', margin: '0, 20px' }} elevation={3}>
            <Box gap={5} padding={3}  >
                <img src={sectionChild.sectionChildImage} style={{ borderRadius: '25px', objectFit: 'cover' }} alt={sectionChild.sectionChildName} height={180}
                    width={'100%'} />
                <Box>
                    <Typography variant={'h6'} marginBottom={1} fontSize={20}>
                        <b>{sectionsChildSchema[sectionName].sectionChildShortDesc.label}: </b>
                        {sectionChild.sectionChildName}
                    </Typography>
                    <Typography variant={'body1'} marginBottom={2} fontSize={12}>
                        <b>{sectionsChildSchema[sectionName].sectionChildDesc.label}: </b>
                        {sectionChild.sectionChildDesc}
                    </Typography>
                    <Typography paragraph variant="body2" color="text.secondary">
                        <p>Links:</p>
                        <List>
                            {sectionChild.sectionChildLinks.map((link) => {
                                let href = link.match(/\((..*?)\)/) ? link.match(/\((..*?)\)/)[1] : null;
                                let text = link.match(/\[(..*?)\]/) ? link.match(/\[(..*?)\]/)[1] : href;
                                return href &&
                                    (<ListItem key={link}>
                                        <a href={href} key={href} style={{ textDecoration: 'none' }} rel="noreferrer" target="_blank" > {text}</a>
                                    </ListItem>)
                            })}
                        </List>
                    </Typography>
                </Box>
            </Box>
        </Paper>
    )

}

export default SectionChildCard
