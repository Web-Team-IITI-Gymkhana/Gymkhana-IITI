import { Box, Button, Drawer, List, ListItem, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import './style.css'

export default function Navbar() {

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

    const list = (anchor) => (
        <Box
            role="presentation"
            width={100}
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Events', 'Team', 'Works'].map((text) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <div className="navbar-wrapper container-fluid">
                <div className="container">
                    <div className="row d-flex align-items-center py-2">
                        <div className="col-2 px-0 col-lg-1 logo-wrapper">
                            <img className="club-logo" src="logo.jpg" alt="" />
                        </div>
                        <div className="col-8 col-lg-10">
                            <h2 className="club-name">Club Name</h2>
                        </div>
                        <div className="col-2 burger">

                            <React.Fragment>
                                <Button onClick={toggleDrawer('right', true)}><MenuIcon color='action' /></Button>
                                <Drawer
                                    anchor={'right'}
                                    open={state['right']}
                                    onClose={toggleDrawer('right', false)}
                                >
                                    {list('right')}
                                </Drawer>
                            </React.Fragment>

                        </div>
                    </div>
                    <hr />
                </div>

                <div className="container links-wrapper" >
                    <div className="row d-flex" style={{ flexDirection: "row-reverse" }}>
                        <div className="col-3 quick-links col-lg-2 py-2 text-center "><b> Events</b></div>
                        <div className="col-2 px-0 quick-links col-lg-2 py-2 text-center "><b> Team</b></div>
                        <div className="col-3 quick-links col-lg-2 py-2 text-center "><b> Work</b></div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}
