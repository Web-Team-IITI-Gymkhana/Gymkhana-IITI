import React, { useState } from "react";
import {
    Button,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Divider,
    Drawer,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

function MobileNavbar({profilePic}) {
    // const [isOpen, setOpen] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <div className="navbar">
            {/* <Hamburger className="ham" toggled={isOpen} toggle={setOpen} > */}
            <>
                <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                    <List>
                        <ListItem onClick={() => setOpenDrawer(false)}>
                            <ListItemText>
                                <Link to="/admin/preview">Preview</Link>
                            </ListItemText>
                        </ListItem>
                        <Divider />
                        {/* <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="#">Publish</Link>
              </ListItemText>
            </ListItem> */}
                        <Divider />
                        <ListItem onClick={() => setOpenDrawer(false)}>
                            <ListItemText>
                                <Link to="#">Change Theme</Link>
                            </ListItemText>
                        </ListItem>
                        <Divider />

                    </List>
                </Drawer>
                <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                    <MenuIcon />
                </IconButton>
            </>
            {/* </Hamburger> */}

            <span className="not-ham">
                <img
                    id="dp"
                    src={profilePic}
                    alt="dp"
                    height="45px"
                    width="40px"
                    radius="3px"
                ></img>
                <Button
                    variant="contained"
                    className="nav-btn"
                    id="home-btn"
                    color="primary"
                >
                    Home Page
                </Button>
            </span>
        </div>
    );
}

export default MobileNavbar;
