import React, {useState, Component} from "react";
import "../../../index.css";
import Container from "@material-ui/core/Container";
import Navbar from "./components/Navbar";
import Box from "@material-ui/core/Box";
import "../../admin/AdminHomePage/AdminHomePage.css"
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";

function AdminHomePage(props) {
    const sectionHeaders = [];
    props.sections.forEach(function(obj){
        sectionHeaders.push(obj.sectionName);
    });
    const [cardInfoSectionHeader, setcardInfoSectionHeader] = useState(sectionHeaders);
    const RenderSectionHeader = (sectionHeader) => {
        return(
            <Card className="sectionHeaderCard">
                {sectionHeader}
            </Card>
        )
    };
    const handledAdd = (name) =>{
        let x = cardInfoSectionHeader
        x.push(name);
        setcardInfoSectionHeader(x);
        
    }
        

    return (
        <div>
            {/* Navbar */}
            <Navbar handlingAdd={handledAdd}/>

            <Container maxWidth="100">
            <Box className="mainContent" display={"flex"}>
                <Box className="sectionHeader">
                    <Box marginTop={"5px"}>
                    <Typography variant="h5" align="center">
                        {cardInfoSectionHeader.map(RenderSectionHeader)}
                    </Typography>
                    </Box>
                </Box>
                <Box className="sectionContent">
                    
                </Box>
            </Box>
            </Container>
        </div>
    );
}

export default AdminHomePage;
