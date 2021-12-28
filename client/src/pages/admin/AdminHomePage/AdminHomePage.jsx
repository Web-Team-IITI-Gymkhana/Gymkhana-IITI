import React, {useState, useEffect} from "react";
import "../../../index.css";
import Container from "@material-ui/core/Container";
import Navbar from "./components/Navbar";
import Box from "@material-ui/core/Box";
import "../../admin/AdminHomePage/AdminHomePage.css"
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";
import {addSection} from "../../../redux/actions/sections"
import { useDispatch} from "react-redux";

function AdminHomePage({sections,userProfile}) {
    const [currSections,setSections] = useState(sections)
    const [currSectionID,setSectionID] = useState(0)


    console.log(currSectionID)
    const currentUser = userProfile.userName
    const dispatch = useDispatch()

    const RenderSectionHeader = (sectionID,sectionHeader) => {
        return(
            <Card className="sectionHeaderCard" onClick={()=>{setSectionID(sectionID)}}>
                {sectionHeader}
            </Card>
        )
    };

    const handledAdd = (sectionName,sectionHeader)=>{
        const newSection = {"sectionName": sectionName,"sectionHeader": sectionHeader,"sectionContent":[]}
        setSections([...currSections,newSection])
        dispatch(addSection(currentUser,newSection))
    }

   return (
        <div>
            <Navbar handlingAdd={handledAdd}/>

            <Container maxWidth="100">
            <Box className="mainContent" display={"flex"}>
                <Box className="sectionHeader">
                    <Box marginTop={"5px"}>
                    <Typography variant="h5" align="center">

                        {
                            currSections.map(section=>RenderSectionHeader(section.sectionID,section.sectionHeader))
                        }
                    </Typography>
                    </Box>
                </Box>
                <Box className="sectionContent">
                        {/* Render section child here */}
                </Box>
            </Box>
            </Container>
        </div>
    );
}

export default AdminHomePage;
