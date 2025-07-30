// SpotifyNavbar.jsx
import { Bell, Users, Download } from "lucide-react";
import { Compass } from "lucide-react";
import { Home } from "lucide-react";
import { Search } from "lucide-react";
import spoLogo from "../assets/1.webp";

const SpotifyNavbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black text-white px-6 py-3 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={spoLogo} alt="Spotify" className="h-8 w-auto" />

          <button className="p-2 rounded-full hover:bg-[#121212]">
            <Home className="w-5 h-5 text-white" />
          </button>

          <div className="flex items-center bg-[#1f1f1f] rounded-full px-3 py-1 w-[32rem] max-w-full">
            <Search className="w-7 h-10 text-gray-400" />
            <input
              type="text"
              placeholder="What do you want to play?"
              className="ml- bg-transparent text-base text-white w-full placeholder:text-gray-400 py-2 border-none outline-none focus:outline-none focus:ring-0"
            />

            <Compass className="w-8 h-10 text-gray-400 ml-2" />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <button className="bg-white text-black px-4 py-1 rounded-full text-sm font-bold hover:bg-gray-200">
            Explore Premium
          </button>

          <Download className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
          <Bell className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
          <Users className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />

          <div className="h-8 w-8 rounded-full bg-pink-500 flex items-center justify-center font-bold text-black">
            F
          </div>
        </div>
      </div>
    </header>
  );
};

export default SpotifyNavbar;
