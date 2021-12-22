import React from 'react'
import Navbar from '../../../components/public/Navbar/Navbar';
import Hero from '../../../components/public/Hero/Hero';
import Footer from '../../../components/public/Footer/Footer';
import Section from '../../../components/public/Section/Section';


export default function HomePage({sections}) {

  return (
     <div>
        {/*header*/}
        <Navbar/>
        <Hero/>


        {/*body*/}
        {
            sections.map(section=><Section key={section.sectionID} section={section}/>)
        }


        {/*footer*/}
        <Footer/>

    </div>
  )
}
