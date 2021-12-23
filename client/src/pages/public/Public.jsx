import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./HomePage/HomePage";

function Public(){
    return(
        <>
        <h1>This is Public side interface.</h1>
        {/* <Router>
              <Routes>

                <Route path="/home" element={<HomePage />} />


              </Routes>
            </Router> */}
            </>
    )
}

export default Public;
