import {Box} from '@mui/material'
import React from 'react'
import '../public.css'
// import background from '../backgroundPublic.jpg'
import { Discord, Linkedin, Instagram, Facebook} from 'react-bootstrap-icons';

export default function Hero({userProfile}) {
  console.log(userProfile)

  let background = userProfile.src

  return (
    // <Box className='heroBg' style={{backgroundImage: `url(${userProfile.src})`,backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
    <Box className='heroBg' style={{backgroundImage: `url(${background})`,backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>

      <div className='heroText theme-orange d-flex row'>
        <div className='col-2' >
          <div className='heroVL'></div>
        </div>
        <div className='col-10 row'>
            <div className='col-11'>
                <div style={{maxWidth: 'fit-content'}}>
                    <div className='heroWelcome container'>
                        Welcome to the
                    </div>
                </div>
                <div className='heroClubName'>
                    {userProfile.name}
                </div>
                <div className='heroClubDes'>
                    {userProfile.caption}
                </div>
            </div>
            <div className='col-1 heroContacts'>
                <div><a className='heroIcons' href={userProfile.socialMedia.LinkedIn}>
                <Linkedin/>
                </a ></div>
                <div><a className='heroIcons' href={userProfile.socialMedia.Instagram}>
                <Instagram/>
                </a ></div>
                <div><a className='heroIcons' href={userProfile.socialMedia.Facebook}>
                <Facebook/>
                </a ></div>
                <div><a className='heroIcons' href={userProfile.socialMedia.Discord}>
                <Discord/>
                </a ></div>
            </div>
        </div>
      </div>


    </Box>
  )
}
