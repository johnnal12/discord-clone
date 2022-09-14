import React from 'react';

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./components/pages/Home";


function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />}/>
            </Routes>
        </Router>

    );
}

export default App;