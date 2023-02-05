import YouTube from "@u-wave/react-youtube";
import { useContext } from "react";
import { Music } from "../Contexts/musicContext";
import "../styles/music.css";
const YTWrapper = () => {
  const { currentSong, muted, pause } = useContext(Music);
  return (
    <YouTube
      video={currentSong.id}
      muted={muted}
      width={480}
      height={480}
      autoplay
      controls={true}
      suggestedQuality="240"
      paused={pause}
      disableKeyboard={false}
      className="youtube"
    />
  );
};

export default YTWrapper;
