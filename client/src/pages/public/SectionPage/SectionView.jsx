import React from "react";
import Section from "./Section";
import Navbar from "../../../components/public/Navbar/Navbar";
import PreviewNavbar from "../../admin/PreviewPage/PreviewNavbar/PreviewNavbar";

function SectionView({userProfile,sections,id,type}){

    return(
        <div>
            {
                type=="public"?<Navbar userProfile={userProfile} sections={sections}/>:<PreviewNavbar userProfile={userProfile} sections={sections}/>
            }


            {sections.filter(section => section.sectionID===id).map(section=><Section key={section.sectionID} section={section}/>)}
        </div>

    )
}

export default SectionView;
