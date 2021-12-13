import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import { useDispatch , useSelector } from "react-redux";
import { useEffect } from "react";

import {getUser, getUsers ,deleteUser , updateGeneralDetails} from "./redux/actions/users"
import { getSections } from "./redux/actions/sections";
import React from "react";
import Authenticate from "./components/Authenticate";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();

  let allUsers = false;

  useEffect(()=>{
      console.log("In use Effect")

      if(allUsers)
      {
        dispatch(getUsers());
      }
      else
      {
        dispatch(getUser("Cynaptics"))
      }

      dispatch(getSections("Cynaptics"))

  },[allUsers,dispatch]);

  const handleDelete = (userName) => {
    dispatch(deleteUser(userName))
  }
  const handleUpdateUserGeneral = (userName) => {
    dispatch(updateGeneralDetails(userName))
  }

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
      <button onClick={()=>handleUpdateUserGeneral("Cynaptics")}>User Action</button>
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

