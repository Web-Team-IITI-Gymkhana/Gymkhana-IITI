import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";


import { useDispatch , useSelector } from "react-redux";
import { useEffect } from "react";

import {getUser, getUsers ,deleteUser} from "./redux/actions/users"
import { getSections } from "./redux/actions/sections";

import React from "react";
import Authenticate from "./components/Authenticate";
function App() {

  const dispatch = useDispatch();

    useEffect(()=>{
        console.log("In use Effect")
        let allUsers = true;
        if(allUsers)
        {
          dispatch(getUsers());
        }
        else
        {
          dispatch(getUser("PClub"))
        }

        dispatch(getSections("Cynaptics"))

    },[dispatch]);

    const handleDelete = (userName) => {
      dispatch(deleteUser(userName))
      dispatch(getUsers())
    }

    const data = useSelector((state)=> state)
    console.log(data)

  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Gymkhana IITI</h1>
      </header>
      <button onClick={()=>handleDelete("PClub")}>Delete User</button>
     </div>

    <Router>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/login" element={<Authenticate />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

