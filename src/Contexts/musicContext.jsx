import { createContext } from "react";

export const Music = createContext();

const Context = () => {
  return <Music.Provider></Music.Provider>;
};
