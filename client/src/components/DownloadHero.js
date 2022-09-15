import React from 'react';
import {AiOutlineDownload} from "react-icons/ai";

function DownloadHero() {
    return (
        <div className="flex flex-col">
        <div className=" bg-gray-600 pt-32 lg:flex-row flex inline-block justify-center gap-52">
            <div>
                <h1 className="font-extrabold text-7xl items-center justify-center pb-10 text-gray-200 "> GET DISCORD<br/> FOR ANY <br/>DEVICE</h1>
                <h2 className="font-semibold tracking-wide text-gray-200 text-lg tracking-wide"> An adventure awaits. Hang out with your friends on our desktop app<br/> and keep the conversation going on mobile.</h2>
                <div
                    className=" pt-5 flex flex-col sm:flex-row md:flex-col lg:flex-row md:items-start sm:items-center gap-6 text-discord_blurple">
                    <button className="bg-discord_blue pr-5 gap-2 w-75 font-medium text-gray-200 flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl
                        hover:text-discord_blurple focus:outline-none whitespace-nowrap">
                        <AiOutlineDownload/>
                        Download for Windows
                    </button>
                    <label className="pt-5 text-gray-200 font-semibold text-lg"> Windows 7 or higher </label>
                </div>
            </div>
            <img className="items-center justify-center pb-32 h-1/3 w-1/3" src="https://i.imgur.com/To0vn2P.png" alt=""/>
        </div>
        </div>
    );
}

export default DownloadHero;