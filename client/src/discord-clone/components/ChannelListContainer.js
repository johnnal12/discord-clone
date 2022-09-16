import React from 'react';
import {ChannelList, useChatContext} from "stream-chat-react";
import Cookies from "universal-cookie";
import {ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";


const SideBar = () => (
    <div className="bg-gray-700 w-20 pt-16 pb-16">
            <div className="channel-list__sidebar__icon1">
                <div className="icon1__inner">
                    <img src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png" alt=" " width="55" />
                </div>
            </div>
            <div className="channel-list__sidebar__icon1">
                <div className="icon1__inner">
                    <img src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png" alt=" " width="55" />
                </div>
            </div>
            <div className="channel-list__sidebar__icon1">
                <div className="icon1__inner">
                    <img src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png" alt=" " width="55" />
                </div>
            </div>
            <div className="channel-list__sidebar__icon1">
                <div className="icon1__inner">
                    <img src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png" alt=" " width="55" />
                </div>
            </div>
            <div className="channel-list__sidebar__icon1">
                <div className="icon1__inner">
                    <img src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png" alt=" " width="55" />
                </div>
            </div>
            <div className="channel-list__sidebar__icon1">
                <div className="icon1__inner">
                    <img src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png" alt=" " width="55" />
                </div>
            </div>
            <div className="channel-list__sidebar__icon1">
                <div className="icon1__inner">
                    <img src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png" alt=" " width="55" />
                </div>
            </div>

            <div className="py-64" />
            <div className="channel-list__sidebar__icon1">
                <div className="icon1__inner">
                    <img src="https://cdn-icons-png.flaticon.com/512/126/126467.png" alt=" " width="35" />
                </div>
            </div>

    </div>
)

const CompanyHeader = () => (
    <div className="pl-3 pt-3 h-62px">
        <h1 className="font-semibold text-lg flex items-center justify-center pr-10 pl-8 w-full h-full"> <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/625eb604bb8605784489d361_Discord-Logo%2BWordmark-Color%20(1).png"/> </h1>


    </div>
)

function ChannelListContainer() {
    return (
          <>
               <SideBar/>
                <div className="flex flex-col bg-gray-600 w-72">
                    <CompanyHeader/>
                    <ChannelSearch/>
                </div>

          </>

    );
}

export default ChannelListContainer;