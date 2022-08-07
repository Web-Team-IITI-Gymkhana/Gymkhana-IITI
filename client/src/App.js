import React from "react";
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";
import { useSelector } from "react-redux";

import Public from "./pages/public/Public/Public";
import Admin from "./pages/admin/Admin/Admin";
import Authenticate from "./components/admin/Authenticate/Authenticate";

import axios from "axios";
import { useDispatch } from "react-redux";
import { logoutAdmin } from "./redux/actions/adminAuth";

import './index.css';

function App() {

    const dispatch = useDispatch()

    let adminAuth = useSelector((state)=> state.adminAuth)
    console.log("adminAuth",adminAuth)

    axios.interceptors.response.use((response) => {
        return response
        }, async function (error) {
        if (error.response.status === 403) {
            localStorage.setItem('token',null)
            dispatch(logoutAdmin())
        }
        return Promise.reject(error);
    });

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

