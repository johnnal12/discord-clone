import React from 'react';

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./components/pages/Home";
import UserLogin from "./components/pages/UserLogin";


function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/login" element={<UserLogin />} />
            </Routes>
        </Router>

    );
}

export default App;