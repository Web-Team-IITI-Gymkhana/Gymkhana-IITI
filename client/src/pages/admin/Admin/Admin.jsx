import React from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setContentVersions } from "../../../redux/actions/contentVersions";

import HomePage from "../../public/HomePage/HomePage";
import AdminProfilePage from "../AdminProfilePage/AdminProfilePage";
import AdminHomePage from "../AdminHomePage/AdminHomePage";
import SectionView from "../../public/SectionPage/SectionView";


function Admin(){

    const [currentSections, setCurrentSections] = useState([]);
    const [currentUserProfile, setCurrentProfile] = useState({});

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setContentVersions("","admin"))
    },[dispatch])

    let contentVersions = useSelector((state)=> state.contentVersions)

    const findSectionsAccToSequence = (sections,sequence) => {
        console.log("In admin ")
        console.log("Orig Sections",sections)
        console.log("Sequence",sequence.length)
        let sectionsAccToSequence = []
        for(let i=0;i<sequence.length();i++)
        {
            let sectionID = parseInt(sequence[i])
            let section = sections.find(section => section.sectionID === sectionID)
            sectionsAccToSequence.push(section)
        }
        console.log("Loop done")
        // if(sections[2]){sectionsAccToSequence.push(sections[2])}
        
        console.log("Sequence Sections",sectionsAccToSequence)
        return sectionsAccToSequence
    }

    useEffect(() => {
        try {

            let currentVersion = contentVersions[1]

            let currentName = currentVersion.userDetails.name
            let currentLogoSrc = currentVersion.userDetails.logo
            let currentSocialMedia = currentVersion.userDetails.socialMedia
            let sectionSequence = currentVersion.sectionSequence
            
            const sectionsAccToSequence = findSectionsAccToSequence(currentVersion.Sections,sectionSequence)

            setCurrentSections(sectionsAccToSequence)

            let currentEmail = currentVersion.contactDetails.email
            let currentPhoneNumber = currentVersion.contactDetails.phoneNumber

            let currentHomePagePoster = currentVersion.homePagePoster
            let currentThemeDetails = currentVersion.themeDetails

            setCurrentProfile({
                "name": currentName, "email": currentEmail, "logo": currentLogoSrc, "socialMedia": currentSocialMedia, "phoneNumber": currentPhoneNumber,
                "src": currentHomePagePoster.src, "caption": currentHomePagePoster.caption, "theme": currentThemeDetails
            })

        } catch (error) {
            setCurrentSections([])
        }
    }, [contentVersions])

    console.log("currentSections",currentSections)

    return(
        <>
        {
            currentSections.length !== 0?
                <div>
                    <Routes>
                        <Route path="/profile" element={<AdminProfilePage userProfile={currentUserProfile}/>}/>
                        <Route path="/home" element={<AdminHomePage userProfile={currentUserProfile}/>} />
                        <Route path="/preview" element={<HomePage userProfile={currentUserProfile} sections={currentSections} type="admin"/>}/>
                        {currentSections.map(section=><Route path={"/preview/section/" + section.sectionID } element={<SectionView userProfile={currentUserProfile} sections={currentSections} id={section.sectionID} type="admin"/>} key={section.sectionID} />)}
                    </Routes>
                </div> : ""
        }

        </>
    )
}

export default Admin;
