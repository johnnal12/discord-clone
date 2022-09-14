import React from 'react';
import Header from "../Header";
import Hero from "../Hero";

function Card1() {
    return (
        <div className=" pt-40 lg:flex-row flex inline-block justify-center gap-52">
            <img className="items-center justify-center pb-4" src="https://i.imgur.com/NbrhWDl.png" alt=""/>
            <div>
                <h1 className="font-extrabold text-5xl items-center justify-center pb-10"> Create
                    an<br/> invite-only <br/> place where you <br/> belong</h1>
                <h2 className="font-semibold tracking-wide"> Discord servers are organized into topic-<br/>based
                    channels where you can collaborate,<br/> share, and just talk about your day without
                    clogging<br/> up a group chat.</h2>
            </div>
        </div>
    )
}

function Card2() {
    return (
        <div className=" bg-gray-200 pt-40 lg:flex-row flex inline-block justify-center gap-52">
            <div>
                <h1 className="font-extrabold text-5xl items-center justify-center pb-10"> Where hanging<br/> out is easy</h1>
                <h2 className="tracking-wide text-xl"> Grab a seat in a voice channel when you’re <br/>
                    free. Friends in your server can see you’re<br/> around and instantly pop in to talk without<br/> having to call.</h2>
            </div>
            <img className="items-center justify-center pb-4" src="https://i.imgur.com/weVmDFM.png" alt=""/>
        </div>
    );
}

function Card3() {
   return(
       <div className=" pt-40 lg:flex-row flex inline-block justify-center gap-52">
           <img className="items-center justify-center pb-4" src="https://i.imgur.com/9r5pRXO.png" alt=""/>
           <div>
               <h1 className="font-extrabold text-5xl items-center justify-center pb-10"> From few to a <br/> fandom</h1>
               <h2 className="tracking-wide text-xl"> Get any community running with moderation<br/>
                   tools and custom member access. Give<br/> members special powers, set up private<br/> channels, and more.</h2>
           </div>
       </div>
   );
}

function Card4() {
    return(
        <div className="bg-gray-200 pt-20 pb-20 flex-col flex inline-block items-center justify-center gap-10">
            <h1 className="text-gray-800 text-5xl font-extrabold">RELIABLE TECH FOR STAYING CLOSE</h1>
            <h2 className="font-semibold text-lg text-center"> Low-latency voice and video feels like you’re in the same room.
                Wave hello over video, watch friends stream their<br/> games, or gather up and have a drawing session with screen share.</h2>
            <img className="items-center justify-center pb-4 h-3/5 w-3/5" src="https://i.imgur.com/EeLpGZK.png" alt=""/>
            <h1 className="text-gray-800 text-3xl font-extrabold">Ready to start your journey?</h1>
            <button className="bg-gray-600 text-white gap-4 w-75 font-medium flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl
                        hover:text-discord_blurple focus:outline-none whitespace-nowrap"> Open Discord on WebApp </button>
        </div>
    )
}


function Home() {
    return (
        <>
            <Header/>
            <Hero/>
            <Card1/>
            <Card2/>
            <Card3/>
            <Card4/>
        </>
    );
}

export default Home;