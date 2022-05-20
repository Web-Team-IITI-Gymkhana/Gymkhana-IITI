import React from 'react'
import {Box} from '@mui/material'

import Navbar from '../../../components/public/Navbar/Navbar';
import Hero from '../../../components/public/Hero/Hero';
import Footer from '../../../components/public/Footer/Footer';
import Section from '../../../components/public/Section/Section';
import SectionLoading from '../../../components/public/Section/SectionLoading';

export default function HomePage({userProfile, sections,type}) {
    sections = sections.filter(section => section.visible === true)
    return (
     <div>
        <Navbar userProfile={userProfile} sections={sections} type={type}/>
        <Hero userProfile={userProfile}/>


        {
            sections.length > 0 ? sections.map(section => section.sectionContent.length>0? <Section key={section.sectionID} section={section} />:"") :
            <SectionsLoading />
        }

        <Footer userProfile={userProfile}/>

    </div>
  )
}

const SectionsLoading = () => {
  return <Box display='flex' flexDirection={'column'} alignItems={'center'}>
  <SectionLoading />
  <SectionLoading />
  <SectionLoading />
</Box>
}
