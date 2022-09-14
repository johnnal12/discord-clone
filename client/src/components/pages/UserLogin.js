import React from 'react';

function UserLogin() {
    return (
        <div
            className="bg-[url('https://i.imgur.com/eCB4uA8.jpg')] h-screen w-screen bg-cover flex flex-row justify-center items-center">
            <div className="w-2/5 h-1/2 bg-gray-700 rounded-lg shadow-lg flex flex-row gap-36">
                <div className="flex flex-col">
                    <h1 className="text-white font-bold text-2xl font-unis tracking-wide whitespace-nowrap flex px-28 pt-10"> Welcome
                        Back! </h1>
                    <h2 className="text-gray-200 text-18 font-unis tracking-wide flex px-16"> We're so excited to see
                        you again!</h2>
                    <form className="pt-8 font-semibold text-gray-200 px-10 flex flex-col">
                        <label className="text-gray-300 text-sm "> EMAIL OR PHONE NUMBER *</label>
                        <input type="text" id="username" name="username" placeholder=""
                               className=" pl-5 w-96 flex-1 py-2 rounded-lg border-b-2 border-gray-400 focus:border-green-400
                      text-black placeholder-black
                      outline-none" />
                        <label className="pt-5 text-gray-300 text-sm "> PASSWORD *</label>
                        <input type="text" id="username" name="username" placeholder=""
                               className=" pl-5 w-96 flex-1 py-2 rounded-lg border-b-2 border-gray-400 focus:border-green-400
                      text-black placeholder-black
                      outline-none" />
                        <label className="pt-5 pb-5 text-discord_blurple"> Forgot your password?</label>
                        <button className="bg-discord_blue p-3 rounded-lg text-xs px-6 md:text-sm focus:outline-none
                 hover:shadow-2xl font-semibold hover:text-discord_blurple transition duration-200 ease-in-out
                 whitespace-nowrap"> Log in</button>
                        <label className="pt-3"> Need an account? Register </label>
                    </form>
                </div>
                <div className="pt-10 pr-16">
                    <img className="rounded-2xl flex text-center" src="https://i.imgur.com/eOXmmxR.png" alt=""/>
                    <div>
                        <h1 className="font-extrabold text-2xl pt-10 flex text-center text-gray-200"> Log in with QR Code </h1>
                        <h2 className="pt-5 flex text-center text-gray-200"> Scan this with the Discord mobile app to log in instantly</h2>
                    </div>
                </div>

            </div>




        </div>
    );
}

export default UserLogin;