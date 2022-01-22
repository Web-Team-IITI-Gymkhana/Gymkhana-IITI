import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Add, Delete, Edit, MoreVert } from "@mui/icons-material";
import { ListItemIcon, ListItemText, MenuItem, Menu, MenuList, IconButton, Grid, Card } from '@material-ui/core'
import { makeStyles } from "@mui/styles";

import { styles } from "../../../variable-css";

import SectionChild from "../SectionChild/SectionChild";

import SectionChildModal from "../Modal/SectionChildModal";
import SectionModal from "../Modal/SectionModal";

import { deleteSection } from "../../../redux/actions/contentVersions";

const useStyles = makeStyles(styles)

function Section({ userName, currSectionID }) {
    const classes = useStyles()

    const [anchorEl, setAnchorEl] = useState(null)
    const [menuOpen, setMenuOpen] = useState(false)

    let contentVersions = useSelector((state) => state.contentVersions)
    let sections = contentVersions[(contentVersions).length - 1].Sections

    let section = sections.find(section => section.sectionID === currSectionID)

    let sectionID = -1
    let sectionDetails = {}

    try {
        sectionID = section.sectionID
        sectionDetails = { "sectionName": section.sectionName, "sectionHeader": section.sectionHeader }
    } catch (error) {
        sectionID = -1
    }

    const newSectionChild = { "sectionChildName": "", "sectionChildImage": "", "sectionChildShortDesc": "", "sectionChildDesc": "", "sectionChildLinks": [] }

    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deleteSection(sectionID))
    }

    return (

        sectionID > 0 ?
            <Card className={classes.section}>
                <Box display={'flex'} justifyContent={'space-between'} marginBottom={3}>
                    <h3 className="header">{section.sectionHeader}</h3>
                    <>
                        <IconButton onClick={(event) => {
                            setAnchorEl(event.currentTarget)
                            setMenuOpen(true)
                        }}>
                            <MoreVert fontSize="small" />
                        </IconButton>
                        <Menu open={menuOpen} onClose={() => { setMenuOpen(false) }} anchorEl={anchorEl}>
                            <MenuList>
                                <SectionChildModal userName={userName}
                                    sectionID={sectionID}
                                    sectionChildID={0}
                                    sectionChild={newSectionChild}
                                    type={"addSectionChild"}
                                    triggerElement={
                                        <MenuItem>
                                            <ListItemIcon onClick={() => {
                                                // handleDelete(0)
                                            }}>
                                                <Add fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText>{`Add ${section.sectionName}`}</ListItemText>
                                        </MenuItem>
                                    } />
                                <MenuItem>
                                    <ListItemIcon onClick={handleDelete}>
                                        <Delete fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText>Delete</ListItemText>
                                </MenuItem>
                                <SectionModal userName={userName}
                                    sectionID={sectionID}
                                    type={"updateSection"}
                                    sectionDetails={sectionDetails} triggerElement={
                                        <MenuItem>
                                            <ListItemIcon>
                                                <Edit fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText>Update</ListItemText>
                                        </MenuItem>
                                    } />
                            </MenuList>
                        </Menu>
                    </>
                </Box>
                <Grid container spacing={3} justifyContent="center">
                    {section.sectionContent.map(sectionChild =>
                        <Grid item key={sectionChild.sectionChildID}>
                            <SectionChild userName={userName}
                                sectionID={sectionID}
                                sectionChild={sectionChild} />
                        </Grid>)}
                </Grid>
            </Card> :
            <></>
    );
}

export default Section;
