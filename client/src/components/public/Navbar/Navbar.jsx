import { Box, Button, Drawer, List, ListItem, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';

export default function Navbar({ userProfile, sections, type }) {
    
    const [state, setState] = React.useState({
        right: false,
    });
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    let routeLink = ""
    let homeLink = ""

    if (type == "public") {
        routeLink = "/public/home/section/"
        homeLink = "/public/home"
    }
    else {
        routeLink = "/admin/preview/section/"
        homeLink = "/admin/home"
    }

    const list = (anchor) => (
        <Box 
            className='drawer'
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >

            <List>
                {sections.map((text) => (
                    <a className='quick-links' href={routeLink + text.sectionID} key={text.sectionID}>
                        <ListItem className='quick-links' button key={text.sectionName}>
                            <ListItemText style={{textAlign: 'center'}} primary={text.sectionName} />
                        </ListItem>
                    </a>
                ))}
            </List>


        </Box>
    );



    return (
        <>
            <div className="navbar-wrapper theme-orange container-fluid">
                <div className="container">
                    <div className="row d-flex align-items-center py-1">
                        <a href={homeLink} className="col-1 px-0 col-lg-0 logo-wrapper">
                            <img className="club-logo" src={userProfile.logo} alt="Club Logo" />
                        </a>
                        <div className="container col-11 align-items-right container-fluid links-wrapper" >
                            <div className="col d-flex" style={{ flexDirection: "row-reverse" }}>
                                <a href={homeLink} className='contactUs col-2 py-2 text-center'>Contact Us</a>
                                {sections.map(section => <div className="col-2 quick-links py-2 " key={section.sectionID}><Link to={routeLink + section.sectionID} className="quick-links">{section.sectionName}</Link></div>)}
                                <a href={homeLink} className='quick-links col-2 py-2 text-center'>Home</a>
                            </div>
                        </div>
                        <div className="col-11 toggleDrawer" >
                            <React.Fragment>
                                <Button onClick={toggleDrawer('right', true)}><MenuIcon color='action' /></Button>
                                <Drawer
                                    className='drawer'
                                    anchor={'right'}
                                    open={state['right']}
                                    onClose={toggleDrawer('right', false)}
                                >
                                    <a className='club-logo-navbar' href="/public/home">
                                        <img className="club-logo-navbar" src={userProfile.logo} alt="Club Logo" />
                                    </a>
                                    <a href="/" className='quick-links'>Home</a>
                                    {list('right')}
                                    <a href="/" className='contact'>Contact Us</a>
                                </Drawer>
                            </React.Fragment>

                        </div>
                    </div>
                </div>

                
            </div>
        </>
    )
}
