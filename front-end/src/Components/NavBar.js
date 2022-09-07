import { Link } from "react-router-dom";

export default function NavBar({ code }) {
  return (
    <nav>
      <h1>
        <Link to="/songs" style={{ color: "white", textDecoration: "none" }}>
          Better Spotify
          <p style={{fontSize: "18px"}}>Objectively wrose But Subjectively better</p>
        </Link>
      </h1>

      <button>
        {code ? (
          <Link to="/dashboard">Listen with Spotify</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </button>

      <button>
        <Link to="/songs/new">New Song</Link>
      </button>
    </nav>
  );
}
