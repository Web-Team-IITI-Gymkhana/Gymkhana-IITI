import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useRouteMatch,
    Link,
    useParams,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
    getUser,
    getUsers,
    deleteUser,
    updateGeneralDetails,
} from "./redux/actions/users";
import {
    getSections,
    updateSection,
    addSectionChild,
    updateSectionChild,
    addSection,
    deleteSectionChild,
} from "./redux/actions/sections";
import Loader from "./components/Loader/Loader";

import Public from "./pages/public/Public";
import Admin from "./pages/admin/Admin";
import Authenticate from "./components/Auth/Authenticate";
import HomePage from "./pages/public/HomePage/HomePage";
import ProfilePage from "./pages/public/ProfilePage/ProfilePage";
import AdminProfilePage from "./pages/admin/AdminProfilePage";
import AdminHomePage from "./pages/admin/AdminHomePage";

import './index.css';

// function App() {
//   const [loading, setLoading] = useState(true)
//   const dispatch = useDispatch();

//   const currentUser = "Cynaptics"


function App() {
    const [loading, setLoading] = useState(true);
    const [sections, setSections] = useState([]);
    const [userProfile, setProfile] = useState([]);

    const currentUser = "Cynaptics";
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getUser(currentUser))
        dispatch(getSections(currentUser))
        setLoading(false)
    }, [dispatch]);

    const data = useSelector((state) => state)
    console.log(data)
    let user = data.users

    useEffect(() => {
        try {
            let userName = user.userName
            let latestVersion = user.contentVersions[(user.contentVersions).length - 1]
            let name = latestVersion.userDetails.name
            let logoSrc = latestVersion.userDetails.logo
            let socialMedia = latestVersion.userDetails.socialMedia


            setSections(latestVersion.Sections)

            let email = latestVersion.contactDetails.email
            let phoneNumber = latestVersion.contactDetails.phoneNumber

            let homePagePoster = latestVersion.homePagePoster
            let themeDetails = latestVersion.themeDetails

            setProfile([{
                "userName":userName,"name": name, "email": email, "logo": logoSrc, "socialMedia": socialMedia, "phoneNumber": phoneNumber,
                "src": homePagePoster.src, "caption": homePagePoster.caption, "theme": themeDetails
            }])

        } catch (error) {
            console.log(error)
        }
    }, [data])

    console.log(sections)
    console.log(userProfile)

    return (
        <>
            {
                loading ? <Loader /> :
                    <div className="App">
                        <header className="App-header">
                            <h1>Welcome to Gymkhana IITI</h1>
                        </header>

                        <Router>
                            <Routes>
                            <Route path="/public" element={<Public />} />
                            <Route path="/admin" element={<Admin />} />
                            <Route path="/admin/profile" element={<AdminProfilePage />} />
                            <Route path="/admin/home" element={<AdminHomePage />} />
                            <Route path="/admin/login" element={<Authenticate />} />
                            <Route path="/public/home" element={<HomePage sections={sections}/>} />
                            <Route path="/public/profile" element={<ProfilePage />} />
                            </Routes>
                        </Router>
                    </div>
            }

        </>
    );
}

export default App;

