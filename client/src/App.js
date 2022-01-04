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

import { setContentVersions } from "./redux/actions/contentVersions";

import './index.css';


function App() {
    const [sections, setSections] = useState([]);
    const [userProfile, setProfile] = useState({});

    const currentUser = "Cynaptics"

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setContentVersions(currentUser))
    },[dispatch])

    let contentVersions = useSelector((state)=> state.contentVersions)

    useEffect(() => {
        try {
            let userName = currentUser
            let latestVersion = contentVersions[(contentVersions).length - 1]
            let name = latestVersion.userDetails.name
            let logoSrc = latestVersion.userDetails.logo
            let socialMedia = latestVersion.userDetails.socialMedia


            setSections(latestVersion.Sections)

            let email = latestVersion.contactDetails.email
            let phoneNumber = latestVersion.contactDetails.phoneNumber

            let homePagePoster = latestVersion.homePagePoster
            let themeDetails = latestVersion.themeDetails

            setProfile({
                "userName":userName,"name": name, "email": email, "logo": logoSrc, "socialMedia": socialMedia, "phoneNumber": phoneNumber,
                "src": homePagePoster.src, "caption": homePagePoster.caption, "theme": themeDetails
            })

        } catch (error) {
            console.log(error)
        }
    }, [contentVersions])

    return (
        <>
             {
                sections.length !== 0 ?
                    <div className="App">
                        <Router>
                            <Routes>
                            <Route path="/public" element={<Public />} />
                            <Route path="/admin" element={<Admin />} />
                            <Route path="/admin/profile" element={<AdminProfilePage userProfile={userProfile}/>} />
                            <Route path="/admin/home" element={<AdminHomePage userProfile={userProfile}/>} />
                            <Route path="/admin/login" element={<Authenticate />} />
                            <Route path="/public/home" element={<HomePage sections={sections}/>} />
                            {sections.map(section=><Route path={"/public/home/section/" + section.sectionID } element={<SectionView sections={sections} id={section.sectionID}/>} key={section.sectionID} />)}

                            <Route path="/public/profile" element={<ProfilePage />} />
                            </Routes>
                        </Router>
                    </div>:
                    ""
             }

        </>
    );
}

export default App;

