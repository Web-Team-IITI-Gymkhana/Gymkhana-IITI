import React from "react";
import SectionChild from "../SectionChild/SectionChild";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import "./Section.css";

function Section(){
    return(
        <Box id="section-box">
            <h3 className="header">Section Header</h3>
            <Button id="add" variant="contained">Add Events</Button>
            <SectionChild />
        </Box>
    );
}

export default Section;
