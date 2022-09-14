import React from 'react';
import {AiOutlineDownload} from "react-icons/ai"
import {Link} from "react-router-dom";

function Hero() {
    return (
        <div
            className='bg-[url("https://theme.zdassets.com/theme_assets/678183/b7e9dce75f9edb23504e13b4699e208f204e5015.png")] h-full w-full bg-center bg-cover pb-40 md:pb-0 text flex items-center justify-center'>
            <div className="p-7 py-40 h-screen:scale-100 md:flex relative">
                <div className="flex flex-col gap-7 md:max-w-md lg:max-w-none">
                    <h1 className="text-7xl font-extrabold items-center justify-center text-white"> IMAGINE A
                        PLACE...</h1>
                    <h2 className="text-lg font-semibold tracking-wide lg:max-w-3xl w-full text-center text-white items-center">...where
                        you
                        can belong to a school club, a gaming group, or a worldwide art community.<br/>
                        Where just you and a handful of friends can spend time together.<br/>
                        A place that makes it easy to talk every day and hang out more often.
                    </h2>
                    <div
                        className="flex flex-col sm:flex-row md:flex-col lg:flex-row md:items-start sm:items-center gap-6 text-discord_blurple">
                        <button className="bg-white gap-4 w-75 font-medium flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl
                        hover:text-black focus:outline-none whitespace-nowrap">
                            <AiOutlineDownload/>
                            Download for Windows
                        </button>
                        <Link to="/login">
                            <button className="bg-gray-600 text-white gap-4 w-75 font-medium flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl
                        hover:text-discord_blurple focus:outline-none whitespace-nowrap">
                                Open Discord in your Browser
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
