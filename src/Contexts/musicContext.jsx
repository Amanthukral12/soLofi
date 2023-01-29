import { useState, createContext, Children } from "react";
import musicData from "../data/data";

export const Music = createContext();

const Context = ({ children }) => {
  const [pause, setPause] = useState(true);
  const [muted, setMuted] = useState(true);
  const [data, setData] = useState(musicData());
  const [currentSong, setCurrentSong] = useState(data[0]);
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
      }}
    >
      {children}
    </Music.Provider>
  );
};

export default Context;
