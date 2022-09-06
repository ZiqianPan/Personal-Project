import { Link } from "react-router-dom";

export default function NavBar({ code }) {
  return (
    <nav>
      <h1>
        <Link to="/songs" style={{ color: "white", textDecoration: "none" }}>
          Better Spotify
        </Link>
      </h1>

      <button>
        <Link to="/login">Listen Songs</Link>
      </button>

      <button>
        <Link to="/songs/new">New Song</Link>
      </button>
    </nav>
  );
}
