import axios from "axios";
import { useState, useEffect } from "react";
import Song from "./Song.js";

const API = process.env.REACT_APP_API_URL;

function Songs() {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then((response) => setSongs(response.data.payload))
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
    <div className="Songs">

        <article className="Songs">
          <h1 id="SongsText">Songs</h1>
          {songs.map((song) => {
            return <Song key={song.id} song={song} />;
          })}
        </article>
    
    </div>
  );
}


export default Songs;
