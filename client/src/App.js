import React, {useState} from 'react';
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';


import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./components/pages/Home";
import UserLogin from "./components/pages/UserLogin";
import UserRegister from "./components/pages/UserRegister";
import DownloadPage from "./components/pages/DownloadPage";
import NitroPage from "./components/pages/NitroPage";
import 'stream-chat-react/dist/css/index.css';
import {ChannelListContainer, ChannelContainer} from "./discord-clone/components";
import "./Yikes.css"

const cookies = new Cookies();

const apiKey = 'gtnnhatzz8dk';
const authToken = cookies.get("token");

const client = StreamChat.getInstance(apiKey);

if (authToken) {
    console.log(cookies.get("userId"));
    console.log(cookies.get("username"));
    console.log(cookies.get("email"));


    client.connectUser({
        token: cookies.get("token"),
        id: cookies.get("userId"),
        name: cookies.get("username"),
        email: cookies.get("email"),
        hashedPassword: cookies.get("hashedPassword"),
    }, authToken).then(r => {
    })
}


function App() {

    const [createType, setCreateType] = useState("");
    const [isCreating, setIsCreating] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    if (!authToken) {
        return (
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/login" element={<UserLogin/>}/>
                    <Route exact path="/register" element={<UserRegister/>}/>
                    <Route exact path="/download" element={<DownloadPage/>}/>
                    <Route exact path="/nitro" element={<NitroPage/>}/>
                </Routes>
            </Router>
        )
    } else {
        return (
            <div className="flex flex-row shadow-lg h-full">
                <Chat client={client} theme="livestream dark">
                    <ChannelListContainer>

                    </ChannelListContainer>

                    <ChannelContainer>

                    </ChannelContainer>
                </Chat>
            </div>

        )
    }
}

export default App;