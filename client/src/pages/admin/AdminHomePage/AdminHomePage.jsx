import React, { useState } from "react";
import "../../../index.css";
import Container from "@material-ui/core/Container";
import Navbar from "./components/Navbar";
import Section from "../../../components/admin/Section/Section";
import { Box, colors, Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";

import { addSection } from "../../../redux/actions/contentVersions";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/styles"
import { styles } from "../../../variable-css";

const useStyles = makeStyles(styles)

function AdminHomePage({ userProfile }) {
    const classes = useStyles()

    let contentVersions = useSelector((state) => state.contentVersions)
    let sections = contentVersions[(contentVersions).length - 1].Sections

    const [currSectionID, setSectionID] = useState(1)

    const currentUser = userProfile.userName
    const dispatch = useDispatch()

    const RenderSectionHeader = (sectionID, currentSectionId, sectionHeader) => {
        return (
            <Card className={sectionID === currentSectionId ? classes.sectionHeaderCardSelected : classes.sectionHeaderCard}
                onClick={() => { setSectionID(sectionID) }}>
                <Typography className={classes.subheading}>
                    {sectionHeader}
                </Typography>
            </Card>
        )
    };

    const handledAdd = (sectionName, sectionHeader) => {
        const newSection = { "sectionName": sectionName, "sectionHeader": sectionHeader, "sectionContent": [] }
        dispatch(addSection(currentUser, newSection))
    }

    return (
        <>
            <Navbar handlingAdd={handledAdd} userName={currentUser} />

            <Grid container className={classes.mainContainer}>
                {/* section headers here */}
                <Grid item lg={3} className={classes.sectionHeadersContainer}>
                    {sections.map(section => RenderSectionHeader(section.sectionID, currSectionID, section.sectionHeader))}
                </Grid>

                {/* the actual cards of sections */}
                <Grid item lg={9}>
                    <Section userName={currentUser} currSectionID={currSectionID} />
                </Grid>
            </Grid>

            {/* <Container maxWidth="100">
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
            </Container> */}
        </>
    );
}

export default AdminHomePage;
