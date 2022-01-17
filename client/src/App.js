import React from "react";
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";

import Public from "./pages/public/Public";
import Admin from "./pages/admin/Admin/Admin";

import './index.css';
import Authenticate from "./components/Auth/Authenticate";

import Cookie from 'js-cookie'

function App() {


    let user = Cookie.get('user');
    if(user==='false'){user=null;}

    console.log("GoogleUserCookie",user)

    return (
        <>
            {
                <div className="App">
                    <Router>
                        <Routes>
                            <Route exact path="/" element = {<Navigate to="/public/home"/>}/>
                            <Route path="/public/*" element={<Public/>}/>
                            <Route path="/admin/*" element={user ?<Admin/>:<Authenticate/>}/>
                        </Routes>
                    </Router>
                </div>
            }
        </>
    );
}

export default App;

