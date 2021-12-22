import React from 'react'
import EventsSection from "../../../components/public/sections/EventsSection/EventsSection";
import TeamSection from "../../../components/public/sections/TeamSection/TeamSection";
import {Box} from "@mui/material";
import WorkSection from "../../../components/public/sections/WorkSection/WorkSection";


export default function HomePage({sections}) {
    console.log("Homepage",sections)
  return (
     <div>
        {/*header*/}

        {/*body*/}


        {
            sections.map(section=><EventsSection key={section.sectionID} section={section}/>)
        }


        {/*

        <EventsSection eventCardsData={[]}/>
        <Box height={20}/>
        <TeamSection teamCardsData={[]}/>
        <Box height={20}/>
        <WorkSection workCardsData={[]}/> */}

        {/*footer*/}


    </div>
  )
}
