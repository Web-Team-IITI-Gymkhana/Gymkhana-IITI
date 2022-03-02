
import EmailIcon from '@mui/icons-material/Email';
import Contact from '@mui/icons-material/Contacts';
import Location from '@mui/icons-material/LocationOn';
import MobileIcon from '@mui/icons-material/Phone'

import React from 'react'

export default function Footer({userProfile}) {
  console.log(userProfile);
  return (
    <div className='footer theme-orange' id="contactus">
      <div className="footbox" style={{backgroundColor: '#E5E5E5'}}>
        <div className='aboutlocation'>
          <div className='contactus-footer'>
            <h1 className='cont'><font color="#7E7E7E">Contact</font> Us</h1><br/>
            <div className='line'></div>
            <br></br>
            <table>
              <tr>
                <td className='cicon'>
                  <Contact/>
                </td>
                <td>
                  {userProfile.name}
                </td>
              </tr>
              <tr>
                <td className='cicon'>
                  <MobileIcon/>
                </td>
                <td >
                  {userProfile.phoneNumber}
                </td>
              </tr>
              <tr>
                <td className='cicon'>
                  <EmailIcon/>
                </td>
                <td>
                  {userProfile.email}
                </td>
              </tr>
              <tr>
                <td className='cicon'>
                  <Location/>
                </td>
                <td>
                  Indian Institute of Technology, Indore, Simrol- 452020
                </td>
              </tr>
            </table>
          </div>
          <div className='location'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14742.274798805756!2d75.9207231!3d22.5203597!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x784e8cb69818596b!2sIndian%20Institute%20Of%20Technology%20(IIT)%2C%20Indore!5e0!3m2!1sen!2sin!4v1643614132549!5m2!1sen!2sin" width="750" height="350" loading='lazy'></iframe>
          </div>
        </div>
      </div>
      <div className='copyright'>
        &copy; 2022Copyright All Rights Reserved @IIT-Indore
      </div>
    </div>
    //  <div className="container-fluid py-2" style={{backgroundColor: '#292626', color: 'white'}}>
    //    <Typography variant='p' textAlign={'center'} >&copy; 2022Copyright All Rights Reserved @ IIT Indore</Typography>
    //    {/* <div className="container">
    //      <div className="row">
    //        <div className="col-8">
    //          <Typography variant='h6' paddingBottom={1} textAlign={'center'} fontWeight={'bold'} >About</Typography>
    //          <Box style={{padding: '5px'}}>
    //          <Typography textAlign={'center'}>{userProfile.caption}</Typography>
    //          <Typography variant='p' textAlign={'center'} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, impedit consequuntur nesciunt aborum, eligendi odit omnis est aliquid?</Typography>
    //          </Box>

    //        </div>
    //        <div className="col-4">
    //        <Typography variant='h6' paddingBottom={1} textAlign={'center'} fontWeight={'bold'} >Reach Us</Typography>
    //        <div className='row'>
    //          <div className='col-4' style={{textAlign: 'right'}}>
    //         <EmailIcon/>
    //          </div>
    //          <div className='col-4'>
    //         <Typography>{userProfile.email}</Typography>
    //          </div>
    //        </div>
    //        <div className='row'>
    //          <div className='col-4' style={{textAlign: 'right'}}>
    //         <MobileIcon/>
    //          </div>
    //          <div className='col-4'>
    //         <Typography>{userProfile.phoneNumber}</Typography>
    //          </div>
    //        </div>
    //        <div className='row'>
    //          <div className='col-4' style={{textAlign: 'right'}}>
    //         <InstaIcon/>
    //          </div>
    //          <div className='col-4'>
    //         <Typography>{userProfile.socialMedia && userProfile.socialMedia[0]}</Typography>
    //          </div>
    //        </div>
    //        <div className='row'>
    //          <div className='col-4' style={{textAlign: 'right'}}>
    //         <FacebookIcon/>
    //          </div>
    //          <div className='col-4'>
    //         <Typography>{userProfile.socialMedia && userProfile.socialMedia[1]}</Typography>
    //          </div>
    //        </div>
    //        </div>
    //      </div>
    //    </div> */}
    //  </div>
  )
}
