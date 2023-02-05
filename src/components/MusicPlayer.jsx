import React, { useContext } from "react";
import { Music } from "../Contexts/musicContext";
import RandomGif from "./RandomGif";
import YTWrapper from "./YTWrapper";
import "../styles/music.css";
const MusicPlayer = () => {
  const { currentSong, nextVideo, prevVideo, playPause } = useContext(Music);
  console.log(currentSong);
  return (
    <div className="app">
      <div className="parent">
        <RandomGif />
        <YTWrapper />
      </div>

      <p>{currentSong.name}</p>
      <div>
        <button onClick={() => prevVideo()}>Prev</button>
        <button onClick={() => playPause()}>Play</button>
        <button onClick={() => nextVideo()}>Next</button>
      </div>
    </div>
  );
};

export default MusicPlayer;
