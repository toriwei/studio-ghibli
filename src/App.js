import { useState } from "react";
import "./App.css";
import Title from "./Title.js";
import Films from "./Films";

export default function App() {
  const [film, setFilm] = useState();
  return (
    <div className="App">
      <Title text="Studio Ghibli Generator" />
      <Films setter={setFilm} />
      <iframe
        title="Spotify Playlist"
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX7GTqMQDhOum?theme=0"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}
