import React, { useContext } from "react";
import { Music } from "../Contexts/musicContext";
import RandomGif from "./RandomGif";

const MusicPlayer = () => {
  const { currentSong, nextVideo, prevVideo, playPause } = useContext(Music);
  console.log(currentSong);
  return (
    <div>
      <RandomGif />
      <p>Current Song Name</p>
      <div>
        <button onClick={() => prevVideo()}>Prev</button>
        <button onClick={() => playPause()}>Play</button>
        <button onClick={() => nextVideo()}>Next</button>
      </div>
    </div>
  );
};

export default MusicPlayer;
