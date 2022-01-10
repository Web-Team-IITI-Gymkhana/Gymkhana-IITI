import React, {useState} from "react";
import "../../../index.css";
import Container from "@material-ui/core/Container";
import Navbar from "./components/Navbar";
import Section from "../../../components/admin/Section/Section";
import Box from "@material-ui/core/Box";
import "../../admin/AdminHomePage/AdminHomePage.css"
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";

import { addSection } from "../../../redux/actions/contentVersions";
import { useSelector,useDispatch} from "react-redux";

// const sectionHeaderStyle = {
//     display : 'inline-flex',
//     justifyContent : 'space-between'
// }

function AdminHomePage({userProfile}) {

    let contentVersions = useSelector((state)=> state.contentVersions)
    let sections = contentVersions[(contentVersions).length - 1].Sections

    const [currSectionID,setSectionID] = useState(0)

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
        dispatch(addSection(currentUser,newSection))
    }

    return (
        <div>
            <Navbar handlingAdd={handledAdd} userName={currentUser}/>

            <Container maxWidth="100">
            <Box className="mainContent" display={"flex"}>
                <Box className="sectionHeader">
                    <Box marginTop={"5px"}>
                    <Typography variant="h5" align="center">

                        {
                            sections.map(section=>RenderSectionHeader(section.sectionID,section.sectionHeader))
                        }
                    </Typography>
                    </Box>
                </Box>
                <Box className="sectionContent">
                        {
                            currSectionID===0 ? <h1>No Section Selected</h1>:
                                                         <Section userName={currentUser} currSectionID={currSectionID}/>
                        }

                </Box>
            </Box>
            </Container>
        </div>
    );
}

export default AdminHomePage;
