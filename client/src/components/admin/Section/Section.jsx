import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Add, Delete, Edit, MoreVert } from "@mui/icons-material";
import { ListItemIcon, ListItemText, MenuItem, Menu, MenuList, IconButton, Grid, Card } from '@material-ui/core'
import { makeStyles } from "@mui/styles";
import { Button } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { styles } from "../../../variable-css";

import SectionChild from "../SectionChild/SectionChild";

import SectionModal from "../Modal/SectionModal";

import { deleteSection } from "../../../redux/actions/contentVersions";
import { saveSection } from "../../../redux/actions/contentVersions";
import { addSectionChild } from "../../../redux/actions/contentVersions";

const useStyles = makeStyles(styles)

function Section({ userName, currSectionID }) {

    let sectionID = currSectionID>=0 ? currSectionID : -1 ;

    // console.log("currsectionid ",currSectionID)

    const [anchorEl, setAnchorEl] = useState(null)
    const [menuOpen, setMenuOpen] = useState(false)

    const [editing , setEditing] = useState(false)

    const classes = useStyles()

    let contentVersions = useSelector((state) => state.contentVersions)

    let sections = contentVersions[(contentVersions).length - 1].Sections
    let logo = contentVersions[(contentVersions).length - 1].userDetails.logo

    let section = sections.find(section => section.sectionID === currSectionID)

    let sectionDetails = section ? {sectionName : section.sectionName, sectionHeader : section.sectionHeader} : {}

    // console.log("currsection ",currSectionID,section)

    const [checked, setChecked] = useState(section?section.visible:false);

    const find = (section)=>{

        if(!section){
            return []
        }

        let sectionChildSequence = section.sectionChildSequence
        let sectionChildren = section.sectionContent

        let res = []
        for(let i=0;i<sectionChildSequence.length;i++)
        {
            let sectionChildID = parseInt(sectionChildSequence[i])
            let sectionChild = sectionChildren.find(sectionChild => sectionChild.sectionChildID === sectionChildID)
            if(sectionChild){res.push(sectionChild)}
        }
        return res
    }

    const [sectionChildBySeq,setSectionChildBySeq] = useState([... find(section)])
    console.log(sectionChildBySeq)

    const newSectionChild = { "sectionChildName": "", "sectionChildImage": logo, "sectionChildShortDesc": "", "sectionChildDesc": "", "sectionChildLinks": [] ,"visible":true}


    const dispatch = useDispatch()

    useEffect(()=>{
        if(section)
        {
            setChecked(section.visible)
            setSectionChildBySeq(find(section))
        }

    },[contentVersions])

    const handleDelete = () => {
        dispatch(deleteSection(sectionID))
    }

    const handleAdd = () => {
        dispatch(addSectionChild(sectionID, newSectionChild));
    }

    const handleSaveSection = () => {
        section.visible = checked
        setEditing(false)
        dispatch(saveSection(sectionID,section))
    }

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (

        sectionID>0 && section ?
            <Card className={classes.section}>
                <Box display={'flex'} justifyContent={'space-between'} marginBottom={3}>
                    <h3 className="header">{section.sectionHeader}</h3>
                    {editing && <FormControlLabel control={<Checkbox checked={checked} onChange={handleChange} />} label="Visible"/>}
                    {
                        editing?
                        <Button variant="contained" onClick={()=>{handleSaveSection()}}>SAVE</Button>:
                        <Button variant="contained" onClick={()=>{setEditing(true)}}>EDIT</Button>
                    }

                    <>
                        <IconButton onClick={(event) => {
                            setAnchorEl(event.currentTarget)
                            setMenuOpen(true)
                        }}>
                            <MoreVert fontSize="small" />
                        </IconButton>
                        <Menu open={menuOpen} onClose={() => { setMenuOpen(false) }} anchorEl={anchorEl}>
                            <MenuList>
                                {
                                    editing?<MenuItem  onClick={handleAdd}>
                                    <ListItemIcon>
                                        <Add fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText>{`Add ${section.sectionName}`}</ListItemText>
                                </MenuItem> : ""
                                }


                                <MenuItem onClick={handleDelete}>
                                    <ListItemIcon >
                                        <Delete fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText>Delete</ListItemText>
                                </MenuItem>
                                <SectionModal userName={userName}
                                    sectionID={sectionID}
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
                    {find(section).map(sectionChild =>
                        <Grid item key={sectionChild.sectionChildID}>
                            <SectionChild userName={userName}
                                sectionID={sectionID}
                                sectionName={section.sectionName}
                                sectionChild={{...sectionChild}}
                                sectionChildSequence={section.sectionChildSequence}
                                editing={editing}
                                key={sectionChild.sectionChildID}
                                />
                        </Grid>)}
                </Grid>
            </Card> :
            <></>
    );
}

export default Section;
