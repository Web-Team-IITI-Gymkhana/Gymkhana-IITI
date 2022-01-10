import React from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setContentVersions } from "../../redux/actions/contentVersions";
// import { useNavigate, useLocation } from 'react-router-dom';

import HomePage from "./HomePage/HomePage";
import SectionView from "./SectionPage/SectionView";

function Public() {

    // const path = (useLocation()).pathname

    // console.log(path)

    // const navigate = useNavigate();

    // if(path==="/public"){navigate("/public/home")}



    const [publishedSections, setPublishedSections] = useState([]);
    const [publishedUserProfile, setPublishedProfile] = useState({});

    const currentUser = "Cynaptics"

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setContentVersions(currentUser))
    }, [dispatch])

    let contentVersions = useSelector((state) => state.contentVersions)
    let publishedVersionNum = useSelector((state) => state.publishedVersionNum)

    useEffect(() => {
        try {
            let userName = currentUser

            let publishedVersion = contentVersions[publishedVersionNum - 1]

            let publishedName = publishedVersion.userDetails.name
            let publishedLogoSrc = publishedVersion.userDetails.logo
            let publishedSocialMedia = publishedVersion.userDetails.socialMedia

            setPublishedSections(publishedVersion.Sections)

            let publishedEmail = publishedVersion.contactDetails.email
            let publishedPhoneNumber = publishedVersion.contactDetails.phoneNumber

            let publishedHomePagePoster = publishedVersion.homePagePoster
            let publishedThemeDetails = publishedVersion.themeDetails

            setPublishedProfile({
                "userName": userName, "name": publishedName, "email": publishedEmail, "logo": publishedLogoSrc, "socialMedia": publishedSocialMedia, "phoneNumber": publishedPhoneNumber,
                "src": publishedHomePagePoster.src, "caption": publishedHomePagePoster.caption, "theme": publishedThemeDetails
            })




        } catch (error) {
            console.log(error)
        }
    }, [contentVersions])

    return (
        <>
            {
                publishedSections.length !== 0 ?
                    <div>
                        <Routes>
                            <Route path="/home" element={<HomePage userProfile={publishedUserProfile} sections={publishedSections} type="public" />} />
                            {publishedSections.map(section => <Route path={"/home/section/" + section.sectionID} element={<SectionView userProfile={publishedUserProfile} sections={publishedSections} id={section.sectionID} type="public" />} key={section.sectionID} />)}
                        </Routes>
                    </div> : ""
            }

        </>


    )
}

export default Public;
