import { useState, createContext, Children } from "react";
import musicData from "../data/data";

export const Music = createContext();

const MusicContext = ({ children }) => {
  const [pause, setPause] = useState(true);
  const [muted, setMuted] = useState(true);
  const [data, setData] = useState(musicData());
  const [currentSong, setCurrentSong] = useState(data[0]);
  const [volume, setVolume] = useState(1);
  const nextVideo = () => {
    let currentIndex = data.findIndex(
      (song) => song.index === currentSong.index
    );
    if (currentIndex === data.length - 1) {
      currentIndex = 0;
      setCurrentSong(data[currentIndex]);
    } else {
      setCurrentSong(data[currentIndex + 1]);
    }
  };
  const prevVideo = () => {
    let currentIndex = data.findIndex(
      (song) => song.index === currentSong.index
    );
    if (currentIndex === 0) {
      currentIndex = data.length - 1;
      setCurrentSong(data[currentIndex]);
    } else {
      setCurrentSong(data[currentIndex - 1]);
    }
  };

  const playPause = () => {
    setPause(!pause);
    setMuted(!muted);
  };

  return (
    <Music.Provider
      value={{
        pause,
        setPause,
        muted,
        setMuted,
        data,
        setData,
        currentSong,
        setCurrentSong,
        nextVideo,
        prevVideo,
        playPause,
        volume,
        setVolume,
      }}
    >
      {children}
    </Music.Provider>
  );
};

export default MusicContext;
