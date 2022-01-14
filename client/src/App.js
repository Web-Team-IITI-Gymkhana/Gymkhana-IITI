import React from "react";
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";
import { useEffect, useState } from "react";

import Public from "./pages/public/Public";
import Admin from "./pages/admin/Admin/Admin";

import './index.css';
import Authenticate from "./components/Auth/Authenticate";

function App() {

    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     const getUser = () => {
    //         fetch("http://localhost:5000/login/success", {
    //             method: "GET",
    //             credentials: "include",
    //             headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json",
    //             "Access-Control-Allow-Credentials": true,
    //             },
    //         })
    //         .then((response) => {
    //             if (response.status === 200) return response.json();
    //             throw new Error("authentication has been failed!");
    //         })
    //         .then((resObject) => {
    //             setUser(resObject.user);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    //     };
    //     getUser();
    // }, []);

    useEffect(() => {
        const getUser = () => {
            fetch("http://localhost:5000/login/success", {
                method: "GET",
                credentials: "include",
                headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
                },
            })
            .then((response) => {
                console.log(response)
                if (response.status === 200) return response.json();
                throw new Error("authentication has been failed!");
            })
            .then((resObject) => {
                setUser(resObject.user);
            })
            .catch((err) => {
                console.log(err);
            });
        };
        getUser();
    }, []);

    console.log("GoogleUser",user)

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

