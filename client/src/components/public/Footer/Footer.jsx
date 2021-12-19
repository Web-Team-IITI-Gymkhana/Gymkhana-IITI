import { Box, Typography } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import React from 'react'

export default function Footer() {
  return (
     <div className="container-fluid py-4 bg-secondary">
       <div className="container">
         <div className="row">
           <div className="col-8">
             <Typography variant='h5' paddingBottom={2} textAlign={'center'} >About</Typography>
             <Typography variant='p' textAlign={'center'} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, impedit consequuntur nesciunt aborum, eligendi odit omnis est aliquid?</Typography>

           </div>
           <div className="col-4">
           <Typography variant='h6' paddingBottom={2} textAlign={'center'} >Reach Us</Typography>
           <Box display={'flex'} margin={'auto'} justifyContent={'center'} alignItems={'center'}>
             <EmailIcon/>
             <EmailIcon/>
             <EmailIcon/>
           </Box>
           </div>
         </div>
       </div>
     </div>
  )
}
