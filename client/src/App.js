import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Public from "./pages/public/Public";
import Admin from "./pages/admin/Admin/Admin";
import Authenticate from "./components/Auth/Authenticate";
import HomePage from "./pages/public/HomePage/HomePage";
import ProfilePage from "./pages/public/ProfilePage/ProfilePage";
import AdminProfilePage from "./pages/admin/AdminProfilePage";
import AdminHomePage from "./pages/admin/AdminHomePage/AdminHomePage";
import SectionView from "./pages/public/SectionPage/SectionView";
import PreviewPage from "./pages/admin/PreviewPage/PreviewPage";

import { setContentVersions } from "./redux/actions/contentVersions";

import './index.css';


function App() {
    const [currentSections, setCurrentSections] = useState([]);
    const [currentUserProfile, setCurrentProfile] = useState({});

    const [publishedSections, setPublishedSections] = useState([]);
    const [publishedUserProfile, setPublishedProfile] = useState({});

    const currentUser = "Cynaptics"

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setContentVersions(currentUser))
    },[dispatch])

    let contentVersions = useSelector((state)=> state.contentVersions)
    let publishedVersionNum = useSelector((state)=>state.publishedVersionNum)

    useEffect(() => {
        try {
            let userName = currentUser

            let currentVersion = contentVersions[(contentVersions).length - 1]
            let publishedVersion = contentVersions[publishedVersionNum-1]

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

            let publishedName = publishedVersion.userDetails.name
            let publishedLogoSrc = publishedVersion.userDetails.logo
            let publishedSocialMedia = publishedVersion.userDetails.socialMedia

            setPublishedSections(publishedVersion.Sections)

            let publishedEmail = publishedVersion.contactDetails.email
            let publishedPhoneNumber = publishedVersion.contactDetails.phoneNumber

            let publishedHomePagePoster = publishedVersion.homePagePoster
            let publishedThemeDetails = publishedVersion.themeDetails

            setPublishedProfile({
                "userName":userName,"name": publishedName, "email": publishedEmail, "logo": publishedLogoSrc, "socialMedia": publishedSocialMedia, "phoneNumber": publishedPhoneNumber,
                "src": publishedHomePagePoster.src, "caption": publishedHomePagePoster.caption, "theme": publishedThemeDetails
            })




        } catch (error) {
            console.log(error)
        }
    }, [contentVersions])

    return (
        <>
             {
                currentSections.length !== 0 ?
                    <div className="App">
                        <Router>
                            <Routes>
                            <Route path="/public" element={<Public />} />
                            <Route path="/admin" element={<Admin />} />
                            <Route path="/admin/profile" element={<AdminProfilePage userProfile={currentUserProfile}/>} />
                            <Route path="/admin/home" element={<AdminHomePage userProfile={currentUserProfile}/>} />
                            <Route path="/admin/login" element={<Authenticate />} />
                            <Route path="/public/home" element={<HomePage userProfile={publishedUserProfile} sections={publishedSections}/>}/>
                            <Route path="/admin/preview" element={<PreviewPage userProfile={currentUserProfile} sections={currentSections}/>}/>
                            <Route path="/public/profile" element={<ProfilePage />} />

                            {publishedSections.map(section=><Route path={"/public/home/section/" + section.sectionID } element={<SectionView userProfile={publishedUserProfile} sections={publishedSections} id={section.sectionID} type="public"/>} key={section.sectionID} />)}
                            {currentSections.map(section=><Route path={"/admin/preview/section/" + section.sectionID } element={<SectionView userProfile={currentUserProfile} sections={currentSections} id={section.sectionID} type="admin"/>} key={section.sectionID} />)}

                            </Routes>
                        </Router>
                    </div>:
                    ""
             }

        </>
    );
}

export default App;

