import React from 'react'
import { Box, Typography, List, ListItem } from "@mui/material";
import '../public.css'
import { sectionsChildSchema } from '../../../schema';

const SectionChildCard = ({ sectionChild, sectionName }) => {
    return (

        <Box gap={5} padding={3} className={'wrapper'}  >
            <img src={sectionChild.sectionChildImage} style={{ borderRadius: '50%' }} alt={sectionChild.sectionChildName} height={250}
                width={250} />
            <Box>
                <Typography variant={'h4'} marginBottom={1}>
                    <b>{sectionsChildSchema[sectionName].sectionChildShortDesc.label}: </b>
                    {sectionChild.sectionChildName}
                </Typography>
                <Typography variant={'body1'} marginBottom={2}>
                    <h5>{sectionsChildSchema[sectionName].sectionChildDesc.label}: </h5>
                    {sectionChild.sectionChildDesc}
                </Typography>
                <Typography paragraph variant="body2" color="text.secondary">
                            <h5>Links:</h5>
                            <List>
                                {sectionChild.sectionChildLinks.map((link) =>{
                                    let href = link.match(/\((..*?)\)/)? link.match(/\((..*?)\)/)[1] : null;
                                    let text = link.match(/\[(..*?)\]/)? link.match(/\[(..*?)\]/)[1] : href;
                                    return href && 
                                    (<ListItem key={link}>
                                        <a href={href} key={href} style={{ textDecoration: 'none' }} rel="noreferrer" target="_blank" > {text}</a>
                                    </ListItem>)
                                })}
                            </List>
                </Typography>
            </Box>
        </Box>
    )

}

export default SectionChildCard
