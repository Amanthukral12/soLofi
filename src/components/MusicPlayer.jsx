import React, { useContext, useState } from "react";
import { Music } from "../Contexts/musicContext";
import RandomGif from "./RandomGif";
import YTWrapper from "./YTWrapper";
import {
  BiSkipNext,
  BiPlayCircle,
  BiSkipPrevious,
  BiPauseCircle,
  BiVolumeFull,
  BiVolumeMute,
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
        <div className="buttonContainerLeft">
          <div className="icon" onClick={() => prevVideo()}>
            <BiSkipPrevious />
          </div>
          <div className="icon" onClick={() => playPause()}>
            {pause ? <BiPlayCircle /> : <BiPauseCircle />}
          </div>
          <div className="icon" onClick={() => nextVideo()}>
            <BiSkipNext />
          </div>
        </div>
        <div className="volume">
          <div
            className="volumeIcon"
            onClick={() => setVolume(volume === 0 ? 1 : 0)}
          >
            {volume === 0 ? <BiVolumeMute /> : <BiVolumeFull />}
          </div>
          <input
            type="range"
            value={volume}
            min={0}
            max={1}
            step={0.01}
            onChange={handleVolume}
            className="slider"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
