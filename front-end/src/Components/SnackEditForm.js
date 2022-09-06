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
    albumUrl: "",
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
      <div className="HealthSongText">
        <p>Song Health is determined by</p>
        <ul>
          <li>Protein is above 5</li>
          <li>Or Fiber is above 5</li>
          <li>and Sugar is less than 5</li>
        </ul>
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
      <br />
    </div>
  );
}
