import React, { useContext } from "react";
import { Music } from "../Contexts/musicContext";

const MusicPlayer = () => {
  const { currentSong } = useContext(Music);
  console.log(currentSong);
  return (
    <div>
      <div>Song Image</div>
      <p>Current Song Name</p>
      <div>
        <button>Prev</button>
        <button>Play</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default MusicPlayer;
