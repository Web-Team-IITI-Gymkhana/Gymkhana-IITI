import React from 'react'
import { Box, Paper, Typography } from "@mui/material";
import SectionChildCard from '../SectionChild/SectionChildCard';
import ParticlesBg from 'particles-bg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Section.css'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { height } from '@mui/system';

const Section = ({ section }) => {
    section.sectionContent = section.sectionContent.filter(sectionChild => sectionChild.visible === true)

    const responsive = {
        largeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 3000, min: 1300 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 1300, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 572, min: 0 },
            items: 1
        }
    };

    return (
        <div className='section-box py-4' style={{
            backgroundImage: "linear-gradient(to right, #ACE1FFB2, #35B6FFB2)"
        }}>

            <ParticlesBg type="cobweb" bg={{
                position: "absolute",
                zIndex: -1,
                width: '100%',
                height: '70%',
                overflow: 'hidden'
            }}
                config={{
                    rps: 1,
                    g: 1
                }}
                color={['#666666']}
            />

            <div className="ps-3 d-flex justify-content-evenly align-items-center section-box-child">
                <div style={{
                    width: '80%'
                }}>
                    <Carousel
                        responsive={responsive}
                        autoPlaySpeed={3000}
                        autoPlay={true}
                        infinite={true}

                    >
                        {section.sectionContent.map(sectionChild =>
                            <SectionChildCard
                                key={sectionChild.sectionChildID}
                                sectionName={section.sectionName}
                                sectionChild={sectionChild} />)
                        }
                    </Carousel>
                </div>
                <div className="d-flex typo">
                    <div className='section-name' style={{
                        textShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
                        height: 'max-content',
                        color: 'white',
                        fontFamily: 'Montserrat'
                    }}>
                        {section.sectionName}
                    </div>
                    <Link to={'/public/home/section/' + section.sectionID} style={{
                        zIndex: 1000
                    }}>
                        <FontAwesomeIcon size='4x' color='white' icon={faAngleRight} />
                    </Link>
                </div>


            </div>
            <br />
        </div>
    )
}

export default Section
