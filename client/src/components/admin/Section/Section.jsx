import React, { useState } from "react";
import SectionChild from "../SectionChild/SectionChild";
import Box from "@material-ui/core/Box";
import "./Section.css";
import SectionChildModal from "../Modal/SectionChildModal";
import SectionModal from "../Modal/SectionModal";
import Button from '@material-ui/core/Button';

import { useSelector } from "react-redux";
import { deleteSection } from "../../../redux/actions/contentVersions";
import { useDispatch } from "react-redux";
import { Add, Delete, Edit, MoreVert } from "@mui/icons-material";
import { ListItemIcon, ListItemText, MenuItem, Menu, MenuList, IconButton } from '@material-ui/core'

function Section({ userName, currSectionID }) {

    const [anchorEl, setAnchorEl] = useState(null)
    const [menuOpen, setMenuOpen] = useState(false)

    let contentVersions = useSelector((state) => state.contentVersions)
    let sections = contentVersions[(contentVersions).length - 1].Sections

    let section = sections.find(section => section.sectionID === currSectionID)

    let sectionID = -1
    let addButton = {}
    let updateButton = {}
    let sectionDetails = {}

    try {
        sectionID = section.sectionID

        addButton = { "buttonName": `Add ${section.sectionName}`, "buttonID": "add", "buttonVariant": "contained" }
        updateButton = { "buttonName": `Update Section`, "buttonID": "update", "buttonVariant": "contained" }
        sectionDetails = { "sectionName": section.sectionName, "sectionHeader": section.sectionHeader }
    } catch (error) {
        sectionID = -1
    }

    const newSectionChild = { "sectionChildName": "", "sectionChildImage": "", "sectionChildShortDesc": "", "sectionChildDesc": "", "sectionChildLinks": [] }

    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deleteSection(userName, sectionID))
    }

    return (

        sectionID > 0 ?
            <Box>
                <Box display={'flex'} justifyContent={'space-between'}>
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
                                                handleDelete(0)
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
                                            <ListItemIcon onClick={handleDelete}>
                                                <Edit fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText>Update</ListItemText>
                                        </MenuItem>
                                    } />
                            </MenuList>
                        </Menu>
                    </>
                </Box>
                <Box id="section-box">
                    {
                        section.sectionContent.map(sectionChild => <SectionChild userName={userName} sectionID={sectionID} sectionChild={sectionChild} key={sectionChild.sectionChildID} />)
                    }
                </Box>
            </Box> :
            <></>
    );
}

export default Section;
