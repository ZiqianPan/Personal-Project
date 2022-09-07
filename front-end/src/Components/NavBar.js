import { Link } from "react-router-dom";

export default function NavBar({ saveCode }) {
  return (
    <nav>
      <h1>
        <Link to="/songs" style={{ color: "white", textDecoration: "none" }}>
          Better Spotify
        </Link>
      </h1>

      <button>
      {saveCode ?<Link to="/dashboard">Listen with Spotify</Link> :<Link to="/login">Listen with Spotify</Link>}

        
      </button>

      <button>
        <Link to="/songs/new">New Song</Link>
      </button>
    </nav>
  );
}
