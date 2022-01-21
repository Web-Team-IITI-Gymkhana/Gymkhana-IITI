import { Box, Button, Drawer, List, ListItem, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';
// import {styles} from "../../../variable-css"
// import { makeStyles } from "@material-ui/core";
// import { useNavigate } from 'react-router-dom';

// const useStyles = makeStyles(styles)

export default function Navbar({ userProfile, sections, type }) {
    // const classes = useStyles()
    const [state, setState] = React.useState({
        right: false,
    });
    // const navigate = useNavigate();
    // const home = () => {
    //     navigate('/')
    // }

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

    if (type == "public") {
        routeLink = "/public/home/section/"
    }
    else {
        routeLink = "/admin/preview/section/"
    }

    const list = (anchor) => (
        <Box 
            className='drawer'
            role="presentation"
            width={100}
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >

            <List>
                {sections.map((text) => (
                    <a className='quick-links' href={routeLink + text.sectionID} key={text.sectionID}>
                        <ListItem button key={text.sectionName}>
                            <ListItemText style={{textAlign: 'center'}} primary={text.sectionName} />
                        </ListItem>
                    </a>
                ))}
            </List>


        </Box>
    );



    return (
        <>
            <div className="navbar-wrapper container-fluid">
                <div className="container">
                    <div className="row d-flex align-items-center py-3">
                        <a href="/public/home" className="col-1 px-0 col-lg-0 logo-wrapper">
                            <img className="club-logo" src={userProfile.logo} alt="Club Logo" />
                        </a>
                        <div className="col-5 col-lg-5">
                            <a href="/public/home" className="club-name">{userProfile.name}</a>
                        </div>
                        <div className="container col-6 container-fluid links-wrapper" >
                            <div className="col d-flex" style={{ flexDirection: "row-reverse" }}>
                                {sections.map(section => <div className="col-4 quick-links col-lg-2 py-3 text-center " key={section.sectionID}><Link to={routeLink + section.sectionID} className="quick-links">{section.sectionName}</Link></div>)}
                                <a href="/public/home" className='quick-links col-3 col-lg-2 py-2 text-center'>Home</a>
                            </div>
                        </div>
                        <div className="col-6 toggleDrawer" >
                            <React.Fragment>
                                <Button onClick={toggleDrawer('right', true)}><MenuIcon color='action' /></Button>
                                <Drawer
                                    className='drawer'
                                    anchor={'right'}
                                    open={state['right']}
                                    onClose={toggleDrawer('right', false)}
                                >
                                    <a href="/public/home" style={{textAlign: 'center', marginTop: '20px'}}>
                                        <img className="club-logo-navbar" src={userProfile.logo} alt="Club Logo" />
                                    </a>
                                    <a href="/" className='quick-links row-1 py-2 row-lg-2 text-center' style={{margin: '0px', marginTop: '10px'}}>Home</a>
                                    {list('right')}
                                </Drawer>
                            </React.Fragment>

                        </div>
                    </div>
                    <hr />
                </div>

                
            </div>
            <hr />
        </>
    )
}
