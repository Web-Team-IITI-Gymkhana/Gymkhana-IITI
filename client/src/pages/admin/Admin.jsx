import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AdminHomePage from "./AdminHomePage";
// import AdminProfilePage from "./AdminProfilePage";
// import Authenticate from "../../components/Auth/Authenticate";

function Admin(){
    return(
        <>
        <h1>This is Admin side interface.</h1>
        {/* <Router>
              <Routes>

                <Route path="/home" element={<AdminHomePage />} />
                <Route path="/profile" element={<AdminProfilePage />} />
                <Route path="/login" element={<Authenticate />} />



              </Routes>
            </Router> */}
            </>
    )
}

export default Admin;
