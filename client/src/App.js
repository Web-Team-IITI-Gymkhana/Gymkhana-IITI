import React from "react";
import { useState } from "react";
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";

import Public from "./pages/public/Public";
import Admin from "./pages/admin/Admin/Admin";

import './index.css';
import Authenticate from "./components/Auth/Authenticate";

function App() {

    const [user,setUser] = useState(null)


    return (
        <>
            {
                <div className="App">
                    <Router>
                        <Routes>
                            <Route exact path="/" element = {<Navigate to="/public/home"/>}/>
                            <Route path="/public/*" element={<Public/>}/>
                            <Route path="/admin/*" element={user ?<Admin/>:<Authenticate setUser={setUser}/>}/>
                        </Routes>
                    </Router>
                </div>
            }
        </>
    );
}

export default App;

