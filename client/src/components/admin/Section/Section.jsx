import React from "react";
import SectionChild from "../SectionChild/SectionChild";
import Box from "@material-ui/core/Box";
import "./Section.css";
import SectionChildModal from "../Modal/SectionChildModal";
import SectionModal from "../Modal/SectionModal";
import Button from '@material-ui/core/Button';

import { useSelector} from "react-redux";
import { deleteSection } from "../../../redux/actions/contentVersions";
import { useDispatch } from "react-redux";

function Section({userName,currSectionID}){

    let contentVersions = useSelector((state)=> state.contentVersions)
    let sections = contentVersions[(contentVersions).length - 1].Sections

    let section = sections.find(section=>section.sectionID===currSectionID)

    let sectionID = -1
    let addButton = {}
    let updateButton = {}
    let sectionDetails = {}

    try {
        sectionID = section.sectionID

        addButton = {"buttonName":`Add ${section.sectionName}`,"buttonID":"add","buttonVariant":"contained"}
        updateButton = {"buttonName":`Update Section`,"buttonID":"update","buttonVariant":"contained"}
        sectionDetails = {"sectionName":section.sectionName,"sectionHeader":section.sectionHeader}
    } catch (error) {
        sectionID = -1
    }

    const newSectionChild = {"sectionChildName":"","sectionChildImage":"","sectionChildShortDesc":"","sectionChildDesc":"","sectionChildLinks":[]}

    const dispatch = useDispatch()
    const handleDelete = ()=>{
        dispatch(deleteSection(userName,sectionID))
    }

    return(

        sectionID > 0 ?
        <div className ="section">
           <SectionChildModal userName={userName} sectionID={sectionID} sectionChildID={0} sectionChild={newSectionChild}  type={"addSectionChild"} buttonStyle={addButton}/>
           <SectionModal userName={userName} sectionID={sectionID} type={"updateSection"} sectionDetails={sectionDetails} buttonStyle={updateButton}/>
           <Button variant="contained" id="add" onClick={handleDelete}>Delete Section</Button>
            <Box id="section-box">
                <h3 className="header">{section.sectionHeader}</h3>
                {
                    section.sectionContent.map(sectionChild=><SectionChild userName={userName} sectionID={sectionID} sectionChild={sectionChild} key={sectionChild.sectionChildID}/>)
                }
            </Box>
        </div>:
        ""

    );
}

export default Section;
