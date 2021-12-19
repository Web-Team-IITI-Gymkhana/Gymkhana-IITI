import React from 'react'
import Footer from '../../../components/public/Footer/Footer';
import Hero from '../../../components/public/Hero/Hero';
import Navbar from '../../../components/public/Navbar/Navbar';
import EventsSection from '../../../components/public/sections/EventsSection/EventsSection';
import TeamSection from '../../../components/public/sections/TeamSection/TeamSection';
import WorkSection from "../../../components/public/sections/WorkSection/WorkSection";

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
    name: 'Random Name 2',
    position: 'Random Position 2',
    email: 'randomemail2@gmail.com',
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
            <Navbar />
            <Hero />

            {/*body*/}
            <br /><br />
            <EventsSection eventCardsData={eventsDummyArr} />
            <br /><br />
            <TeamSection teamCardsData={teamDummyArr} />
            <br /><br />
            <WorkSection workCardsData={workDummyArr} />

            {/*footer*/}
            <br /><br />
            <Footer />
        </div>
    )
}
