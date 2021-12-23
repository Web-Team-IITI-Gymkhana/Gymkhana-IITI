import React from 'react'
import EventsSection from "../../../components/public/sections/EventsSection/EventsSection";
import TeamSection from "../../../components/public/sections/TeamSection/TeamSection";
import {Box} from "@mui/material";
import WorkSection from "../../../components/public/sections/WorkSection/WorkSection";

<<<<<<< HEAD
const eventsDummyArr = [{
  imageUrl: 'https://picsum.photos/200',
  eventName: "Random Event 1",
  eventDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  buttonText: "Button Text 1",
  buttonLink: "/randomRoute1"
}, {
  imageUrl: 'https://picsum.photos/200',
  eventName: "Random Event 2",
  eventDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  buttonText: "Button Text 2",
  buttonLink: "/randomRoute2"
}, {
  imageUrl: 'https://picsum.photos/200',
  eventName: "Random Event 3",
  eventDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  buttonText: "Button Text 3",
  buttonLink: "/randomRoute3"
}]

const teamDummyArr = [{
  imageUrl: 'https://picsum.photos/100',
  name: 'Random Name 1',
  position: 'Random Position 1',
  email: 'randomemail1@gmail.com',
  facebookLink: 'facebookLink',
  instaLink: 'instaLink',
},
  {
    imageUrl: 'https://picsum.photos/100',
    name: 'Random Name 2',
    position: 'Random Position 2',
    email: 'randomemail2@gmail.com',
    facebookLink: 'facebookLink',
    instaLink: 'instaLink',
  },
  {
    imageUrl: 'https://picsum.photos/100',
    name: 'Random Name 3',
    position: 'Random Position 3',
    email: 'randomemail3@gmail.com',
    facebookLink: 'facebookLink',
    instaLink: 'instaLink',
  },]

const workDummyArr = [{
  imageUrl: 'https://picsum.photos/200',
  projectName: "Random Project 1",
  projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  buttonText: "Button Text 1",
  buttonLink: "/randomRoute1"
}, {
  imageUrl: 'https://picsum.photos/200',
  projectName: "Random Project 2",
  projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  buttonText: "Button Text 2",
  buttonLink: "/randomRoute2"
}, {
  imageUrl: 'https://picsum.photos/200',
  projectName: "Random Project 3",
  projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  buttonText: "Button TeprojectDescriptionxt 3",
  buttonLink: "/randomRoute3"
}]

export default function HomePage() {
  return (
    <div>
      {/*header*/}


      {/*body*/}
      <EventsSection eventCardsData={eventsDummyArr}/>
      <Box height={20}/>
      <TeamSection teamCardsData={teamDummyArr}/>
      <Box height={20}/>
      <WorkSection workCardsData={workDummyArr}/>

      {/*footer*/}


=======

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


>>>>>>> 92eff95266c52458ae9ba036ae4a5e370e00922d
    </div>
  )
}
