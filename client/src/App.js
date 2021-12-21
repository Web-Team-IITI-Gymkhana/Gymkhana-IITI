import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUser, getUsers, deleteUser, updateGeneralDetails } from "./redux/actions/users"
import { getSections, updateSection, addSectionChild, updateSectionChild, addSection, deleteSection, deleteSectionChild } from "./redux/actions/sections";
import React from "react";
import Authenticate from "./components/Auth/Authenticate";
import Loader from "./components/Loader/Loader";
import HomePage from "./pages/public/HomePage/HomePage";
import AdminPage from "./pages/admin/AdminPage/AdminPage";
import ProfilePage from "./pages/admin/ProfilePage/ProfilePage";

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

            <Router>
              <Routes>
                <Route path="/" element={
                  <>
                    <header className="App-header">
                      <h1>Welcome to Gymkhana IITI</h1>
                    </header>
                    <button onClick={() => dispatch(updateSection("Cynaptics", 2))}>Sections Action</button>
                    <Link to='/home'>Go to HomePage</Link>
                  </>
                } />
                <Route path="/home" element={<HomePage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/admin/profile" element={<ProfilePage />} />
                <Route path="/login" element={<Authenticate />} />
              </Routes>
            </Router>
          </div>
      }

    </>
  );
}

export default App;

