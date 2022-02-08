import React from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { setContentVersions } from "../../../redux/actions/contentVersions";

import HomePage from "../HomePage/HomePage";
import SectionView from "../SectionPage/SectionView";
import Loader from "../../../components/Loader/Loader";

function Public() {

    const currentUser = "Cynaptics"

    const [publishedSections, setPublishedSections] = useState([]);
    const [publishedUserProfile, setPublishedProfile] = useState({});
    const [loading,setLoading] = useState(true);

    const findSectionsAccToSequence = (sections,sequence) => {
        console.log("In public ")
        console.log("Orig Sections",sections)
        console.log("Sequence",sequence)
        let sectionsAccToSequence = []
        for(let i=0;i<sequence.length;i++)
        {
            let sectionID = parseInt(sequence[i])
            let section = sections.find(section => section.sectionID === sectionID)
            if(section){sectionsAccToSequence.push(section)}
        }
        console.log("Sequence Sections public",sectionsAccToSequence)

        return sectionsAccToSequence
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setContentVersions(currentUser, "public"))
    }, [dispatch])

    let contentVersions = useSelector((state) => state.contentVersions)

    useEffect(() => {
        try {
            let userName = currentUser

            let publishedVersion = contentVersions[0]

            let publishedName = publishedVersion.userDetails.name
            let publishedLogoSrc = publishedVersion.userDetails.logo
            let publishedSocialMedia = publishedVersion.userDetails.socialMedia
            let sectionSequence = publishedVersion.sectionSequence

            let sectionsAccToSequence = findSectionsAccToSequence(publishedVersion.Sections,sectionSequence)
            console.log("After returning",sectionsAccToSequence)
            setPublishedSections(sectionsAccToSequence)

            console.log("Published sections",publishedSections)


            let publishedEmail = publishedVersion.contactDetails.email
            let publishedPhoneNumber = publishedVersion.contactDetails.phoneNumber

            let publishedHomePagePoster = publishedVersion.homePagePoster
            let publishedThemeDetails = publishedVersion.themeDetails

            setPublishedProfile({
                "userName": userName, "name": publishedName, "email": publishedEmail, "logo": publishedLogoSrc, "socialMedia": publishedSocialMedia, "phoneNumber": publishedPhoneNumber,
                "src": publishedHomePagePoster.src, "caption": publishedHomePagePoster.caption, "theme": publishedThemeDetails
            })


            setLoading(false)


        } catch (error) {
            setPublishedSections([])
        }

    }, [contentVersions])

    console.log("Published sections",publishedSections)

    return (
        <>
            {
                !loading ?
                    <div>
                        <Routes>
                            <Route path="/home" element={<HomePage userProfile={publishedUserProfile} sections={publishedSections} type="public" />} />
                            {publishedSections.map(section => <Route path={"/home/section/" + section.sectionID} element={<SectionView userProfile={publishedUserProfile} sections={publishedSections} id={section.sectionID} type="public" />} key={section.sectionID} />)}
                        </Routes>
                    </div> : <Loader/>
            }

        </>


    )
}

export default Public;
