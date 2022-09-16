import "./Tailwind.css";
import {FcMenu} from "react-icons/fc";
import {Link} from "react-router-dom";

function Header() {
    return (
        // py and px are padding vertically and horizontally
        <header
            className="flex items-center justify-between py-4 px-6 bg-gradient-to-b from-blue-800 to-discord_background">
            <a href="/">
                <img
                    src="https://www.pngmart.com/files/22/Discord-Logos-PNG-Photos.png"
                    alt=""
                    className="w-32 h-12 object-contain" //this part is the size of the navigation bar
                />
            </a>
            <div className="hidden lg:flex space-x-8 text-blue-500 flex items-center text-white">
                <a href="/download" className="link">Download</a>
                <a href="/nitro" className="link">Nitro</a>
                <a href="/" className="link"> Safety</a>
                <a href="/" className="link">Support</a>
                <a href="/" className="link">Blog</a>
            </div>
            <div className="flex space-x-4">
                <Link to="/login">
                    <button className="bg-white p-3 rounded-full text-xs px-6 md:text-sm focus:outline-none
                 hover:shadow-2xl font-semibold hover:text-discord_blurple transition duration-200 ease-in-out
                 whitespace-nowrap"
                    >Login
                    </button>
                    <FcMenu className="h-9 text-blue-500 cursor-pointer lg:hidden"/>
                </Link>

            </div>
        </header>
    );
}

export default Header;