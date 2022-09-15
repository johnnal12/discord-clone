import React from 'react';
import DownloadHero from "../DownloadHero";
import Header from "../Header";

function DownloadCard1() {
    return (
        <div>
            <div className="pt-24 pl-10 flex flex-row">
                <div className="pt-10 pb-10 w-1/2 h-full  rounded-lg flex flex-col items-end">
                    <div
                        className="pt-10 pb-10 w-2/3 h-2/3 bg-gray-200 rounded-lg shadow-lg flex flex-col gap-7 opacity-100 flex items-center">
                        <h1 className="text-black font-semibold text-4xl"> iOS</h1>
                        <button className="bg-discord_blue px-10 py-5 gap-2 w-75 font-medium text-gray-200 flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl
                        hover:text-discord_blurple focus:outline-none whitespace-nowrap"> Download
                        </button>
                        <img className="object-cover w-1/2 rounded-2xl" src="https://i.imgur.com/QknXGo5.png" alt=""/>
                    </div>
                    <div className="pt-10 pb-10">

                    </div>
                    <div
                        className="pt-10 pb-10 w-2/3 h-2/3 bg-gray-200 rounded-lg shadow-lg flex flex-col gap-7 opacity-100 flex items-center">
                        <h1 className="text-black font-semibold text-4xl"> Linux</h1>
                        <button className="bg-discord_green px-10 py-5 gap-2 w-75 font-medium text-gray-200 flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl
                        hover:text-discord_blurple focus:outline-none whitespace-nowrap"> Download
                        </button>
                        <img className="object-cover w-1/2 rounded-2xl" src="https://i.imgur.com/VfUePZa.png" alt=""/>
                    </div>

                    <div className="pt-10 pb-10">

                    </div>

                    <div
                        className="pt-10 pb-10 w-2/3 h-2/3 bg-gray-200 rounded-lg shadow-lg flex flex-col gap-7 opacity-100 flex items-center">
                        <h1 className="text-black font-semibold text-4xl"> Feeling experimental?</h1>
                        <h2 className="font-semibold text-xl"> Try our Public Test Build and test new features before they launch.</h2>
                        <button className="bg-orange-500 px-10 py-5 gap-2 w-75 font-medium text-gray-200 flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl
                        hover:text-discord_blurple focus:outline-none whitespace-nowrap"> Download Public Test Buid
                        </button>
                    </div>
                </div>
                <div className="px-10">

                </div>
                <div className="pt-72 pb-10 w-1/2 h-full rounded-lg flex flex-col flex items-start">
                    <div
                        className="pt-10 pb-10 w-3/4 h-3/4 bg-gray-200 rounded-lg shadow-lg flex flex-col opacity-100 flex items-center">
                        <h1 className="text-black font-semibold text-4xl pb-10"> Android </h1>
                        <button className="bg-gray-600 px-10 py-5 gap-2 w-75 font-medium text-gray-200 flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl
                        hover:text-discord_blurple focus:outline-none whitespace-nowrap"> Download
                        </button>
                        <img className="pt-10 object-cover w-1/2 rounded-2xl" src="https://i.imgur.com/jStmCVV.png"
                             alt=""/>
                    </div>
                    <div className="pt-10 pb-10">

                    </div>
                    <div
                        className="pt-10 pb-10 w-2/3 h-2/3 bg-gray-200 rounded-lg shadow-lg flex flex-col opacity-100 flex items-center">
                        <h1 className="text-black font-semibold text-4xl pb-10"> Mac </h1>
                        <button className="bg-red-600 px-10 py-5 gap-2 w-75 font-medium text-gray-200 flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl
                        hover:text-discord_blurple focus:outline-none whitespace-nowrap"> Download
                        </button>
                        <img className="pt-10 object-cover w-1/2 rounded-2xl" src="https://i.imgur.com/M7wk2ya.png"
                             alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}


function DownloadPage() {
    return (
        <div>
            <Header/>
            <DownloadHero/>
            <DownloadCard1/>
        </div>
    );
}

export default DownloadPage;