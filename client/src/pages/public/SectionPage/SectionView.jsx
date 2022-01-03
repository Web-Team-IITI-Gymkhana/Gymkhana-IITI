import React from "react";
import Section from "./Section";
import Navbar from "../../../components/public/Navbar/Navbar";

function SectionView({sections,id}){

    return(
        // <h3>This is Section View page</h3>
        <div>

        <Navbar sections={sections}/>
        {sections.filter(section => section.sectionID===id).map(section=><Section key={section.sectionID} section={section}/>)}
        </div>

    )
}

export default SectionView;
