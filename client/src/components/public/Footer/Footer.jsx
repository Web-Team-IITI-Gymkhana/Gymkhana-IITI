import { Box, Typography } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import InstaIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook';
import MobileIcon from '@mui/icons-material/Phone'
import React from 'react'

export default function Footer({userProfile}) {
  console.log(userProfile);
  return (
     <div className="container-fluid py-2" style={{backgroundColor: '#292626', color: 'white'}}>
       <div className="container">
         <div className="row">
           <div className="col-8">
             <Typography variant='h6' paddingBottom={1} textAlign={'center'} fontWeight={'bold'} >About</Typography>
             <Box style={{padding: '5px'}}>
             <Typography textAlign={'center'}>{userProfile.caption}</Typography>
             <Typography variant='p' textAlign={'center'} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, impedit consequuntur nesciunt aborum, eligendi odit omnis est aliquid?</Typography>
             </Box>

           </div>
           <div className="col-4">
           <Typography variant='h6' paddingBottom={1} textAlign={'center'} fontWeight={'bold'} >Reach Us</Typography>
           <div className='row'>
             <div className='col-4' style={{textAlign: 'right'}}>
            <EmailIcon/>
             </div>
             <div className='col-4'>
            <Typography>{userProfile.email}</Typography>
             </div>
           </div>
           <div className='row'>
             <div className='col-4' style={{textAlign: 'right'}}>
            <MobileIcon/>
             </div>
             <div className='col-4'>
            <Typography>{userProfile.phoneNumber}</Typography>
             </div>
           </div>
           <div className='row'>
             <div className='col-4' style={{textAlign: 'right'}}>
            <InstaIcon/>
             </div>
             <div className='col-4'>
            <Typography>{userProfile.socialMedia[0]}</Typography>
             </div>
           </div>
           <div className='row'>
             <div className='col-4' style={{textAlign: 'right'}}>
            <FacebookIcon/>
             </div>
             <div className='col-4'>
            <Typography>{userProfile.socialMedia[1]}</Typography>
             </div>
           </div>
           </div>
         </div>
       </div>
     </div>
  )
}
