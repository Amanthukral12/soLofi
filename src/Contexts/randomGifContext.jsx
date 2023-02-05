import React, { createContext, useState } from "react";

export const RandomGifs = createContext();

const RandomGifContext = ({ children }) => {
  const [gif, setGif] = useState("");

  return (
    <RandomGifs.Provider value={{ setGif, gif }}>
      {children}
    </RandomGifs.Provider>
  );
};

export default RandomGifContext;
