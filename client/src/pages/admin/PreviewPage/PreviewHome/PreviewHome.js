import React from 'react'
import Hero from '../../../../components/public/Hero/Hero'
import Footer from '../../../../components/public/Footer/Footer'
import Section from '../../../../components/public/Section/Section'
import SectionLoading from '../../../../components/public/Section/SectionLoading'
import PreviewNavbar from "../PreviewNavbar/PreviewNavbar"
import {Box} from '@mui/material'

function PreviewHome({userProfile,sections}) {
    return (
        <div>
            {/*header*/}
        <PreviewNavbar userProfile={userProfile} sections={sections}/>
        <Hero userProfile={userProfile}/>


        {/*body*/}
        {sections.length > 0 ? sections.map(section => <Section key={section.sectionID} section={section} />) :
            <SectionsLoading />
        }


        {/*footer*/}
        <Footer />
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


export default PreviewHome
