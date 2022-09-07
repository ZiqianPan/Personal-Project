import { Link } from "react-router-dom";

export default function NavBar({ code }) {
  return (
    <nav>
      <h1>
        <Link to="/songs" style={{ color: "white", textDecoration: "none" }}>
          Better Spotify
        </Link>
      </h1>
{/* 
      {code ? (
        <button>
          <Link to="/dashboard"> Go To Spotify Search</Link>{" "}
        </button>
      ) : null} */}

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
