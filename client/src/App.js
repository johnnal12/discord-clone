import React from 'react';
import Header from "./components/Header";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Header/>
                <Routes>
                </Routes>
            </Router>
        </>

    );
}

export default App;