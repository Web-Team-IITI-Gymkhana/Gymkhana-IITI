import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUser, getUsers, deleteUser, updateGeneralDetails } from "./redux/actions/users"
import { getSections, updateSection, addSectionChild, updateSectionChild, addSection, deleteSection, deleteSectionChild } from "./redux/actions/sections";
import React from "react";
import Authenticate from "./components/Auth/Authenticate";
import Loader from "./components/Loader/Loader";
import HomePage from "./pages/public/HomePage/HomePage";
import ProfilePage from "./pages/public/ProfilePage/ProfilePage";
import AdminProfilePage from "./pages/admin/AdminProfilePage";
import AdminHomePage from "./pages/admin/AdminHomePage";

import './index.css';

function App() {
    const [loading, setLoading] = useState(true)

    const [sections, setSections] = useState([])
    const [userProfile, setProfile] = useState([])

    const currentUser = "Cynaptics"
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser(currentUser))
        dispatch(getSections(currentUser))
        setLoading(false)
    },[dispatch]);

    const data = useSelector((state) => state)
    console.log(data)
    let user = data.users

    useEffect(()=>{
        try {
            let latestVersion = user.contentVersions[(user.contentVersions).length - 1]
            let name = latestVersion.userDetails.name
            let logoSrc = latestVersion.userDetails.logo
            let socialMedia = latestVersion.userDetails.socialMedia


            setSections(latestVersion.Sections)

            let email = latestVersion.contactDetails.email
            let phoneNumber = latestVersion.contactDetails.phoneNumber

            let homePagePoster = latestVersion.homePagePoster
            let themeDetails = latestVersion.themeDetails

            setProfile([{"name":name,"email":email,"logo":logoSrc,"socialMedia":socialMedia,"phoneNumber":phoneNumber,
                                "src":homePagePoster.src,"caption":homePagePoster.caption,"theme":themeDetails}])

        } catch (error) {
            console.log(error)
        }
    },[data])

    console.log(sections)
    console.log(userProfile)

    return (
    <>
      {
        loading || sections.length===0 ? <Loader /> :
          <div className="App">
            <header className="App-header">
              <h1>Welcome to Gymkhana IITI</h1>
            </header>

            <Router>
              <Routes>

                <Route path="/home" element={<HomePage sections={sections}/>} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/adminhome" element={<AdminHomePage />} />
                <Route path="/adminprofile" element={<AdminProfilePage userProfile={userProfile[0]} updateGeneralDetails={updateGeneralDetails} />} />
                <Route path="/login" element={<Authenticate />} />
              </Routes>
            </Router>
          </div>
      }

    </>
  );
}

export default App;

