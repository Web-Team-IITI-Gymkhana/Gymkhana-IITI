import React from "react";
import { useEffect,useState } from "react";
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";

import Public from "./pages/public/Public";
import Admin from "./pages/admin/Admin/Admin";

import './index.css';
import Authenticate from "./components/Auth/Authenticate";

function App() {

    const [user,setUser] = useState(null)

    useEffect(()=>{
        if(localStorage.getItem('token'))
        {
            setUser({token:localStorage.getItem('token')})
        }
    },[])
    // useEffect(()=>setUser({token:localStorage.setItem('token',null)}),[])

    return (
        <>
            {
                <div className="App">
                    <Router>
                        <Routes>
                            <Route exact path="/" element = {<Navigate to="/public/home"/>}/>
                            <Route path="/public/*" element={<Public/>}/>
                            <Route path="/admin/*" element={user ?<Admin setUser={setUser}/>:<Authenticate setUser={setUser}/>}/>
                        </Routes>
                    </Router>
                </div>
            }
        </>
    );
}

export default App;

