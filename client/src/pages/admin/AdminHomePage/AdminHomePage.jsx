import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/styles"

import "../../../index.css";
import { styles } from "../../../variable-css";

import Navbar from "../../../components/admin/HomePageNavbar/Navbar"
import Section from "../../../components/admin/Section/Section";

import { addSection } from "../../../redux/actions/contentVersions";

const useStyles = makeStyles(styles)

function AdminHomePage({ userProfile }) {
    const classes = useStyles()

    let contentVersions = useSelector((state) => state.contentVersions)
    let sections = contentVersions[(contentVersions).length - 1].Sections

    const [currSectionID, setSectionID] = useState(0)

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
            <Navbar handlingAdd={handledAdd} userName={currentUser} profilePic={userProfile.logo} />

            <Grid container className={classes.mainContainer} spacing={3}>
                <Grid item lg={3} md={3} sm={12} xs={12}
                    className={classes.sectionHeadersContainer}>
                    {sections.map(section => RenderSectionHeader(section.sectionID, currSectionID, section.sectionHeader))}
                </Grid>

                {/* the actual cards of sections */}
                <Grid item lg={9} md={9} sm={12} xs={12}>
                    <Section userName={currentUser} currSectionID={currSectionID} />
                </Grid>
            </Grid>
        </>
    );
}

export default AdminHomePage;
