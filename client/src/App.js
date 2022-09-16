import React from 'react';

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./components/pages/Home";
import UserLogin from "./components/pages/UserLogin";
import UserRegister from "./components/pages/UserRegister";
import DownloadPage from "./components/pages/DownloadPage";
import NitroPage from "./components/pages/NitroPage";


function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/login" element={<UserLogin />} />
                <Route exact path="/register" element={<UserRegister />} />
                <Route exact path="/download" element={<DownloadPage />} />
                <Route exact path="/nitro" element={<NitroPage />} />
            </Routes>
        </Router>

    );
}

export default App;