import React from "react";
import Section from "./Section";
import Navbar from "../../../components/public/Navbar/Navbar";

function SectionView({userProfile,sections,id,type}){
    console.log(sections)
    return(
        <div>
            <Navbar userProfile={userProfile} sections={sections} type={type}/>
            {sections.filter(section => section.sectionID===id).map(section=><Section key={section.sectionID} section={section}/>)}
        </div>

    )
}

export default SectionView;
