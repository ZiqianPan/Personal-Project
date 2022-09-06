import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function SongNewForm() {
  const navigate = useNavigate();
  const [song, setSong] = useState({
    artist: "",
    title: "",
    uri: "",
    liked: false,
    albumUrl: "",
    duration: "",
  });

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const addSong = (newSong) => {
    axios
      .post(`${API}/songs`, newSong)
      .then(
        () => {
          navigate(`/songs`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, liked: !song.liked });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong(song);
  };

  return (
    <div className="new">
      <form onSubmit={handleSubmit}>
        <label className="new-label" htmlFor="Artist">
          Artist:
        </label>
        <input
          className="text"
          id="artist"
          type="text"
          placeholder="Name Of the Artist"
          required
          value={song.artist}
          onChange={handleTextChange}
        />

        <label className="new-label" htmlFor="title">
          Title:
        </label>
        <input
          className="text"
          id="title"
          type="text"
          placeholder="Title of the Song"
          value={song.title}
          onChange={handleTextChange}
        />

        <label className="new-label" htmlFor="uri">
          URI:
        </label>
        <input
          className="text"
          id="uri"
          value={song.uri}
          type="text"
          placeholder="Spotify URI"
          onChange={handleTextChange}
          required
        />
        <label className="new-label" htmlFor="albumUrl">
          AlbumURL:
        </label>
        <input
          className="text"
          id="albumUrl"
          type="text"
          name="albumUrl"
          value={song.albumUrl}
          onChange={handleTextChange}
        />
        <label className="new-label" htmlFor="liked">
          Liked:
        </label>
        <input
          id="liked"
          type="checkbox"
          name="liked"
          checked={song.liked}
          onChange={handleCheckboxChange}
        />

        <label className="new-label" htmlFor="albumUrl">
          Duration:
        </label>
        <input
          className="text"
          id="duration"
          type="number"
          name="duration"
          value={song.duration}
          placeholder="duration of the song"
          onChange={handleTextChange}
        />

        <br />
        <input className="button" type="submit" />
      </form>
    </div>
  );
}
