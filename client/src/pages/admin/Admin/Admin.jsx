import React from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setContentVersions } from "../../../redux/actions/contentVersions";
import HomePage from "../../public/HomePage/HomePage";

import AdminProfilePage from "../AdminProfilePage";
import AdminHomePage from "../AdminHomePage/AdminHomePage";
import SectionView from "../../public/SectionPage/SectionView";

import { autoSaveContent } from "../../../redux/actions/contentVersions";


function Admin(){

    const [currentSections, setCurrentSections] = useState([]);
    const [currentUserProfile, setCurrentProfile] = useState({});

    // setTimeout(()=>{

    // },60000)

    const currentUser = "Cynaptics"

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setContentVersions(currentUser,"admin"))
    },[dispatch])

    let contentVersions = useSelector((state)=> state.contentVersions)

    setTimeout(()=>{
        if(contentVersions.length > 0)
        {
            dispatch(autoSaveContent(currentUser,contentVersions))
        }
    },30000)

    

    useEffect(() => {
        try {
            let userName = currentUser

            let currentVersion = contentVersions[(contentVersions).length - 1]

            let currentName = currentVersion.userDetails.name
            let currentLogoSrc = currentVersion.userDetails.logo
            let currentSocialMedia = currentVersion.userDetails.socialMedia

            setCurrentSections(currentVersion.Sections)

            let currentEmail = currentVersion.contactDetails.email
            let currentPhoneNumber = currentVersion.contactDetails.phoneNumber

            let currentHomePagePoster = currentVersion.homePagePoster
            let currentThemeDetails = currentVersion.themeDetails

            setCurrentProfile({
                "userName":userName,"name": currentName, "email": currentEmail, "logo": currentLogoSrc, "socialMedia": currentSocialMedia, "phoneNumber": currentPhoneNumber,
                "src": currentHomePagePoster.src, "caption": currentHomePagePoster.caption, "theme": currentThemeDetails
            })

        } catch (error) {
            setCurrentSections([])
        }
    }, [contentVersions])

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
