import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Edit_Song() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [song, setSong] = useState({
    artist: "",
    title: "",
    uri: "",
    liked: false,
    album_url: "",
    duration: "",
  });

  const updateSong = (updatedSong) => {
    axios
      .put(`${API}/songs/${id}`, updatedSong)
      .then(
        () => {
          navigate(`/songs`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((response) => {
        setSong(response.data.payload);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, [id]);

  const handleCheckboxChange = () => {
    setSong({ ...song, liked: !song.liked });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong(song, id);
  };
  
  return (
    <div className="edit">
      <div>
        
        <img src={song.album_url} alt={song.title} height={"300px"} width={"300px"}/>
      </div>

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
          value={song.artist || ""}
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
          value={song.title || ""}
          onChange={handleTextChange}
        />

        <label className="new-label" htmlFor="uri">
          URI:
        </label>
        <input
          className="text"
          id="uri"
          value={song.uri || ""}
          type="text"
          placeholder="Spotify URI"
          onChange={handleTextChange}
          required
        />

        <label className="new-label" htmlFor="album_url">
          AlbumURL:
        </label>
        <input
          className="text"
          id="album_url"
          type="text"
          value={song.album_url || ""}
          onChange={handleTextChange}
        />

        <label className="new-label" htmlFor="liked">
          Liked:
        </label>
        <input
          id="liked"
          type="checkbox"
          name="liked"
          checked={song.liked || false}
          onChange={handleCheckboxChange}
        />

        <label className="new-label" htmlFor="album_url">
          Duration:
        </label>
        <input
          className="text"
          id="duration"
          type="number"
          name="duration"
          value={song.duration || 0}
          placeholder="duration of the song"
          onChange={handleTextChange}
        />

        <br />
        <input className="button" type="submit" />
      </form>
      <br />
    </div>
  );
}
