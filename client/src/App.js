import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { getUser, getUsers, deleteUser, updateGeneralDetails } from "./redux/actions/users"
import { getSections, updateSection, addSectionChild, updateSectionChild, addSection, deleteSection, deleteSectionChild } from "./redux/actions/sections";
import React from "react";
import Authenticate from "./components/Auth/Authenticate";
import Loader from "./components/Loader/Loader";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();

  const currentUser = "Cynaptics"

  useEffect(() => {
    dispatch(getUser(currentUser))
    dispatch(getSections(currentUser))
    setLoading(false)
  }, [dispatch]);



  const data = useSelector((state) => state)
  console.log(data)

  return (
    <>
      {
        loading ? <Loader /> :
          <div className="App">
            <header className="App-header">
              <h1>Welcome to Gymkhana IITI</h1>
            </header>
            <button onClick={() => dispatch(updateSection("Cynaptics", 2))}>Sections Action</button>
            <Router>
              <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/login" element={<Authenticate />} />
              </Routes>
            </Router>
          </div>
      }

    </>
  );
}

export default App;

