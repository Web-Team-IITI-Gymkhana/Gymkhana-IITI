import React from "react";
import SectionChild from "../SectionChild/SectionChild";
import Box from "@material-ui/core/Box";
import "./Section.css";
import SectionChildModal from "../Modal/SectionChildModal";

import { useSelector} from "react-redux";

function Section({userName,currSectionID}){

    let contentVersions = useSelector((state)=> state.contentVersions)
    let sections = contentVersions[(contentVersions).length - 1].Sections

    let section = sections.find(section=>section.sectionID===currSectionID)

    const addButton = {"buttonName":`Add ${section.sectionName}`,"buttonID":"add","buttonVariant":"contained"}
    const newSectionChild = {"sectionChildName":"","sectionChildImage":"","sectionChildShortDesc":"","sectionChildDesc":"","sectionChildLinks":[]}
    const sectionID = section.sectionID

    return(
        <Box id="section-box">
            <h3 className="header">{section.sectionHeader}</h3>

            <SectionChildModal userName={userName} sectionID={sectionID} sectionChildID={0} sectionChild={newSectionChild}  type={"addSectionChild"} buttonStyle={addButton}/>

            {
                section.sectionContent.map(sectionChild=><SectionChild userName={userName} sectionID={sectionID} sectionChild={sectionChild} key={sectionChild.sectionChildID}/>)
            }
        </Box>
    );
}

export default Section;
