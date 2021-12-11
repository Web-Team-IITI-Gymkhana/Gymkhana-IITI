import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";


import { useDispatch , useSelector } from "react-redux";
import { useEffect } from "react";

import {getUsers} from "./redux/actions/users"
import { getSections } from "./redux/actions/sections";

import React from "react";
function App() {

  const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getUsers());
        dispatch(getSections("Cynaptics"))
    },[dispatch]);

    const data = useSelector((state)=> state)
    console.log(data)

  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Gymkhana IITI</h1>
      </header>
     </div>

    <Router>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

