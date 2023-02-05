import React, { useContext, useEffect } from "react";
import { RandomGifs } from "../Contexts/randomGifContext";
const RandomGif = () => {
  const { gif, setGif } = useContext(RandomGifs);
  const getRandomGif = () => {
    const gifs = ["1", "2", "3", "4"];
    var a = Math.floor(Math.random() * gifs.length + 1);
    var src = `../assets/gifs/${a}.gif`;
    setGif(src);
  };

  useEffect(() => {
    getRandomGif();
  }, []);

  return (
    <div>
      <img src={gif} alt="" />
    </div>
  );
};

export default RandomGif;
