import React, { useContext, useState } from "react";
import { Music } from "../Contexts/musicContext";
import RandomGif from "./RandomGif";
import YTWrapper from "./YTWrapper";
import {
  BiSkipNext,
  BiPlayCircle,
  BiSkipPrevious,
  BiPauseCircle,
} from "react-icons/bi";
import "../styles/music.css";
const MusicPlayer = () => {
  const {
    currentSong,
    nextVideo,
    prevVideo,
    playPause,
    pause,
    volume,
    setVolume,
  } = useContext(Music);

  const handleVolume = (e) => {
    console.log(parseFloat(e.target.value));
    setVolume(parseFloat(e.target.value));
  };
  return (
    <div className="app">
      <div className="parent">
        <RandomGif />
        <YTWrapper />
      </div>
      <span className="songName">{currentSong.name}</span>
      <div className="buttonContainer">
        <div className="icon" onClick={() => prevVideo()}>
          <BiSkipPrevious />
        </div>
        <div className="icon" onClick={() => playPause()}>
          {pause ? <BiPlayCircle /> : <BiPauseCircle />}
        </div>
        <div className="icon" onClick={() => nextVideo()}>
          <BiSkipNext />
        </div>
        <input
          type="range"
          value={volume}
          min={0}
          max={1}
          step={0.01}
          onChange={handleVolume}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
