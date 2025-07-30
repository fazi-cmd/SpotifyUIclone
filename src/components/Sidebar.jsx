import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[24%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-full rounded-lg flex flex-col">
        {/* 🔹 Top Header */}
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="stack_icon" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.plus_icon} alt="plus_icon" />
            <img className="w-5" src={assets.arrow_icon} alt="arrow_icon" />
          </div>
        </div>

        {/* 🔹 Filter Buttons */}
        <div className="flex gap-2 px-4">
          <button className="bg-[#242424] text-white px-3 py-1 rounded-full text-xs font-semibold">
            Playlists
          </button>
          <button className="bg-[#242424] text-white px-3 py-1 rounded-full text-xs font-semibold">
            Artists
          </button>
        </div>

        {/* 🔹 Search & Recents */}
        <div className="flex items-center justify-between px-4 py-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-400 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
          <div className="flex items-center gap-1 text-xs text-gray-400 font-medium cursor-pointer">
            Recents
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>

        {/* 🔹 Scrollable Content */}
        <ul className="flex-1 overflow-y-auto px-2 pb-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent hover:scrollbar-thumb-gray-500 space-y-2">
          {/* Artists */}
          <li className="text-sm text-gray-400 px-2 mt-4">Artists</li>
          <li className="group/item flex items-center gap-4 rounded-lg p-3 hover:bg-[#2a2a2a] cursor-pointer">
            <img className="h-10 w-10 " src="liked.webp" alt="Eminem" />
            <div>
              <p className="text-sm font-semibold text-white">Liked Songs</p>
              <p className="text-xs text-gray-400 font-semibold">
                Playlist . 2 songs
              </p>
            </div>
          </li>

          <li className="group/item flex items-center gap-4 rounded-lg p-3 hover:bg-[#2a2a2a] cursor-pointer">
            <img
              className="h-10 w-10 rounded-full"
              src="shubh.webp"
              alt="Shubh"
            />
            <div>
              <p className="text-sm font-semibold text-white">Shubh</p>
              <p className="text-xs text-gray-400 font-semibold">Artist</p>
            </div>
          </li>

          <li className="group/item flex items-center gap-4 rounded-lg p-3 hover:bg-[#2a2a2a] cursor-pointer">
            <img
              className="h-10 w-10 rounded-full"
              src="sidhu.webp"
              alt="Sidhu Moose Wala"
            />
            <div>
              <p className="text-sm font-semibold text-white">
                Sidhu Moose Wala
              </p>
              <p className="text-xs text-gray-400 font-semibold">Artist</p>
            </div>
          </li>

          <li className="group/item flex items-center gap-4 rounded-lg p-3 hover:bg-[#2a2a2a] cursor-pointer">
            <img
              className="h-10 w-10 rounded-full"
              src="shae_gill.webp"
              alt="Shae Gill"
            />
            <div>
              <p className="text-sm font-semibold text-white">Shae Gill</p>
              <p className="text-xs text-gray-400 font-semibold">Artist</p>
            </div>
          </li>

          <li className="group/item flex items-center gap-4 rounded-lg p-3 hover:bg-[#2a2a2a] cursor-pointer">
            <img
              className="h-10 w-10 rounded-full"
              src="jhope.webp"
              alt="j-hope"
            />
            <div>
              <p className="text-sm font-semibold text-white">j-hope</p>
              <p className="text-xs text-gray-400 font-semibold">Artist</p>
            </div>
          </li>

          <li className="group/item flex items-center gap-4 rounded-lg p-3 hover:bg-[#2a2a2a] cursor-pointer">
            <img className="h-10 w-10 rounded-full" src="BTS.jpeg" alt="BTS" />
            <div>
              <p className="text-sm font-semibold text-white">BTS</p>
              <p className="text-xs text-gray-400 font-semibold">Artist</p>
            </div>
          </li>

          <li className="group/item flex items-center gap-4 rounded-lg p-3 hover:bg-[#2a2a2a] cursor-pointer">
            <img
              className="h-10 w-10 rounded-full"
              src="xtentacion.jpg"
              alt="XXXTENTACION"
            />
            <div>
              <p className="text-sm font-semibold text-white">XXXTENTACION</p>
              <p className="text-xs text-gray-400 font-semibold">Artist</p>
            </div>
          </li>

          <li className="group/item flex items-center gap-4 rounded-lg p-3 hover:bg-[#2a2a2a] cursor-pointer">
            <img
              className="h-10 w-10 rounded-full"
              src="nusrat.webp"
              alt="Nusrat Fateh Ali Khan"
            />
            <div>
              <p className="text-sm font-semibold text-white">
                Nusrat Fateh Ali Khan
              </p>
              <p className="text-xs text-gray-400 font-semibold">Artist</p>
            </div>
          </li>

          {/* Playlists */}
          {/* <li className="text-sm text-gray-400 px-2 mt-4">Playlists</li>
          <li className="group/item flex items-center gap-4 rounded-lg p-3 hover:bg-[#2a2a2a] cursor-pointer">
            <img
              className="h-10 w-10 rounded"
              src="/your-images/liked-songs.jpg"
              alt="Liked Songs"
            />
            <div>
              <p className="text-sm font-semibold text-white">Liked Songs</p>
              <p className="text-xs text-gray-400">Playlist • 25 songs</p>
            </div>
          </li>
          <li className="group/item flex items-center gap-4 rounded-lg p-3 hover:bg-[#2a2a2a] cursor-pointer">
            <img
              className="h-10 w-10 rounded"
              src="/your-images/workout.jpg"
              alt="Workout Mix"
            />
            <div>
              <p className="text-sm font-semibold text-white">Workout Mix</p>
              <p className="text-xs text-gray-400">Playlist • 12 songs</p>
            </div>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
