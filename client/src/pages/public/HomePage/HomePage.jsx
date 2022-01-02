import React from 'react'
import Navbar from '../../../components/public/Navbar/Navbar';
import Hero from '../../../components/public/Hero/Hero';
import Footer from '../../../components/public/Footer/Footer';
import Section from '../../../components/public/Section/Section';
import { Box, Skeleton } from '@mui/material'
import './HomePage.css'

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

const sections = []

export default function HomePage({ section }) {

  return (
    <div>
      {/*header*/}
      <Navbar />
      <Hero />


      {/*body*/}
      {sections.length > 0 ? sections.map(section => <Section key={section.sectionID} section={section} />) :
        <Box display='flex' flexDirection={'column'} alignItems={'center'}>
          <SkeletonLoadingTemplate />
          <SkeletonLoadingTemplate />
          <SkeletonLoadingTemplate />
        </Box>
      }


      {/*footer*/}
      <Footer />

    </div>
  )
}


const SkeletonLoadingTemplate = () => {
  return (<Box gap={5} padding={3} className={'wrapper'} marginBottom={10} >
    <Skeleton variant="circular" width={250} height={250} animation='wave' />
    <Box>
      <Skeleton variant="text" animation='wave' />
      <Skeleton variant="rectangular" animation='wave' width={300} height={200}/>
    </Box>
  </Box>)
}