import React from 'react'
import Navbar from '../../../components/public/Navbar/Navbar';
import Hero from '../../../components/public/Hero/Hero';
import Footer from '../../../components/public/Footer/Footer';
import Section from '../../../components/public/Section/Section';
import SectionLoading from '../../../components/public/Section/SectionLoading';
import {Box} from '@mui/material'

// const sections = [
//   {
//     sectionId: 0,
//     sectionName: 'Work',
//     sectionContent: [
//       {
//         sectionChildId: 0, sectionChildName: 'dummy_name_0', sectionChildDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident enim a neque quasi et animi perspiciatis, qui odit. Ad tempore sunt reiciendis placeat totam quos excepturi cum sit veniam dicta.'
//       }
//     ]
//   },
//   {
//     sectionId: 1,
//     sectionName: 'Team',
//     sectionContent: [
//       {
//         sectionChildId: 0, sectionChildName: 'dummy_name_0', sectionChildDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident enim a neque quasi et animi perspiciatis, qui odit. Ad tempore sunt reiciendis placeat totam quos excepturi cum sit veniam dicta.'
//       }
//     ]
//   },
//   {
//     sectionId: 2,
//     sectionName: 'Events',
//     sectionContent: [
//       {
//         sectionChildId: 0, sectionChildName: 'dummy_name_0', sectionChildDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident enim a neque quasi et animi perspiciatis, qui odit. Ad tempore sunt reiciendis placeat totam quos excepturi cum sit veniam dicta.'
//       }
//     ]
//   }
// ]

// const sections = []

export default function HomePage({ sections }) {

  return (
    <div>
      {/*header*/}
      <Navbar />
      <Hero />


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