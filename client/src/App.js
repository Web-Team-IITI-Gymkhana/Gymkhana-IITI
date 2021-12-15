import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import { useDispatch , useSelector } from "react-redux";
import { useEffect , useState } from "react";

import {getUser, getUsers ,deleteUser , updateGeneralDetails} from "./redux/actions/users"
import { getSections , updateGeneralSection , addSectionChild , updateSectionChild ,addSection , deleteSection , deleteSectionChild} from "./redux/actions/sections";
import React from "react";
import Authenticate from "./components/Authenticate";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();

  const currentUser = "Cynaptics"

  useEffect(()=>{
      dispatch(getUser(currentUser))
      dispatch(getSections(currentUser))
      setLoading(false)
  },[dispatch]);



  const data = useSelector((state)=> state)
  console.log(data)

  return (
    <>
    {
      loading ? <Loader/> :
      <div className="App">
      <header className="App-header">
        <h1>Welcome to Gymkhana IITI</h1>
      </header>
      <button onClick={()=>console.log("Button Click")}>Sections Action</button>
    <Router>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/login" element={<Authenticate />}/>
      </Routes>
    </Router>
     </div>
    }

    </>
  );
}

export default App;

