import React, {useState} from 'react';
import {useChatContext} from "stream-chat-react";

function ChannelSearch() {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const getChannels = async (text) => {
        try{
            //todo:fetch channels
        }catch (error){
            setQuery("");
        }
    }

    const onSearch = (event) => {
        event.preventDefault();

        setLoading(true);
        setQuery(event.target.value);
        getChannels(event.target.value);
    }
    return (
        <div className="channel-search__container">
            <div className="channel-search__input__wrapper">
                <div className="channel-search__input__icon">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Search_Icon.png" alt="" />
                </div>
                <input className="channel-search__input__text pl-10"
                    placeholder="Find or start a conversation"
                    type="text"
                    value={query}
                    onChange={onSearch}/>

            </div>
        </div>
    );
}

export default ChannelSearch;