import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MusicContext from "./Contexts/musicContext";
import RandomGifContext from "./Contexts/randomGifContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RandomGifContext>
      <MusicContext>
        <App />
      </MusicContext>
    </RandomGifContext>
  </React.StrictMode>
);
