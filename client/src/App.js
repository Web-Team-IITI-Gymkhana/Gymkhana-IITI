import React from "react";
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";
import { useSelector } from "react-redux";

import Public from "./pages/public/Public/Public";
import Admin from "./pages/admin/Admin/Admin";
import Authenticate from "./components/admin/Authenticate/Authenticate";

import './index.css';

function App() {

    let adminAuth = useSelector((state)=> state.adminAuth)
    console.log("adminAuth",adminAuth)

    return (
        <>
            {
                <div className="App">
                    <Router>
                        <Routes>
                            <Route exact path="/" element = {<Navigate to="/public/home"/>}/>
                            <Route path="/public/*" element={<Public/>}/>
                            <Route path="/admin/*" element={adminAuth.isAuthenticated ?<Admin/>:<Authenticate/>}/>
                        </Routes>
                    </Router>
                </div>
            }
        </>
    );
}

export default App;

