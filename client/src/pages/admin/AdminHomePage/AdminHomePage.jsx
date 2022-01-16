import React, {useState} from "react";
import "../../../index.css";
import Container from "@material-ui/core/Container";
import Navbar from "./components/Navbar";
import Section from "../../../components/admin/Section/Section";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";

import { addSection } from "../../../redux/actions/contentVersions";
import { useSelector,useDispatch} from "react-redux";
import { makeStyles } from "@material-ui/styles"
import {styles} from "../../../variable-css";

const useStyles = makeStyles(styles)


function AdminHomePage({userProfile}) {
    const classes = useStyles()

    let contentVersions = useSelector((state)=> state.contentVersions)
    let sections = contentVersions[(contentVersions).length - 1].Sections

    const [currSectionID,setSectionID] = useState(0)

    const currentUser = userProfile.userName
    const dispatch = useDispatch()

    const RenderSectionHeader = (sectionID,sectionHeader) => {
        return(
            <Card className={classes.sectionHeaderCard} onClick={()=>{setSectionID(sectionID)}}>
                {sectionHeader}
            </Card>
        )
    };

    const handledAdd = (sectionName,sectionHeader)=>{
        const newSection = {"sectionName": sectionName,"sectionHeader": sectionHeader,"sectionContent":[]}
        dispatch(addSection(currentUser,newSection))
    }

    return (
        <div>
            <Navbar handlingAdd={handledAdd} userName={currentUser}/>

            <Container maxWidth="100">
            <Box className={classes.mainContent} display={"flex"}>
                <Box className={classes.sectionHeader}>
                    <Box marginTop={"5px"}>
                    <Typography className={classes.subheading}>
                        {
                            sections.map(section=>RenderSectionHeader(section.sectionID,section.sectionHeader))
                        }
                    </Typography>
                    </Box>
                </Box>
                <Box className={classes.sectionContent}>
                        {
                            currSectionID===0 ? <Typography className={classes.headingBold}>No Section Selected</Typography>:
                            <Section userName={currentUser} currSectionID={currSectionID}/>
                        }

                </Box>
            </Box>
            </Container>
        </div>
    );
}

export default AdminHomePage;
