import { useContext } from "react";
import Display from "./components/Display";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import { PlayerContext } from "./context/PlayerContext";
import SpotifyNavbar from "./components/SpotifyNavbar";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black flex flex-col">
    
      <div className="h-[10%]">
        <SpotifyNavbar />
      </div>

      <div className="h-[80%] flex">
        <Sidebar />
        <Display />
      </div>

      <div className="h-[10%]">
        <Player />
      </div>

      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

export default App;
