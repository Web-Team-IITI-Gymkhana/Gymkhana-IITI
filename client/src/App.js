import React from "react";
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";
import { useEffect, useState } from "react";

import Public from "./pages/public/Public";
import Admin from "./pages/admin/Admin/Admin";

import './index.css';
import Authenticate from "./components/Auth/Authenticate";

import configData from "./config.prod.json"

import Cookies from 'js-cookie';

function App() {

    const [user, setUser] = useState(null);


    useEffect(() => {
        const getUser =  () => {
            console.log("Checking at URL ",configData.CHECK_URL)

            fetch(configData.CHECK_URL, {
                method: "GET",
                credentials: "include",
                headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
                },
            })
            .then((response) => {
                console.log("Google Response ",response)
                if (response.status === 200) return response.json();
                else{<Navigate to="/"/>}
                throw new Error("authentication has been failed!");
            })
            .then((resObject) => {
                console.log("resObject ",resObject)
                setUser(resObject.user);
            })
            .catch((err) => {
                console.log("Google Error", err);
            });
            console.log("After Fetch")
        };
        getUser();
    }, []);

    console.log("GoogleUserAPI",user)

    console.log("GoogleUserCookie",Cookies.get('jwt'))

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

