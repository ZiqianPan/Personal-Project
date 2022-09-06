import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import HeartHealth from "./HeartHealth";



const API = process.env.REACT_APP_API_URL;

export default function SongDetails() {
  const [song, setSongs] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((response) => {
        setSongs(response.data.payload);
      })
      .catch(() => {
        navigate("/not found");
      });
  }, [id, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/songs/${id}`)
      .then(() => {
        navigate("/songs");
      })
      .catch(() => {
        console.warn("error");
      });
  };

  return (
    <div className="show">
      <aside>
      {/* <HeartHealth snackHealth={snack.is_healthy}/> */}
      </aside>

      <article>
        <div>
          <img src={song.albumurl} alt={song.title} />
        </div>
      </article>

      <article className="ShowText">
        <div>
          <p>
            {" "}
            <strong>Title:</strong> {song.title}
          </p>
          <p>
            {" "}
            <strong>Artist:</strong> {song.artist}{" "}
          </p>
          <p>
            {" "}
            <strong>Duration:</strong> {song.duration}{" "}
          </p>
          <p>
            {" "}
            <strong>Is liked:</strong>  {song.liked ? <span>⭐️</span> : "Nope"}
          </p>
        </div>
      </article>

      <div className="showNavigation">
        <div>
          <Link to={`/songs`}>
            <button className="show_button">Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/songs/${song.id}/edit`}>
            <button className="show_button">Edit</button>
          </Link>
        </div>
        <div>
          <button className="show_button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
