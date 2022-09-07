const API = process.env.REACT_APP_API_URL;

function Song({ song }) {
  return (
    <div className="singleCard Song text-center">
      <img src={song.album_url} alt={song.title} width="200px" />

      <a href={`/songs/${song.id}`} rel="noreferrer">
        <h4>
          {song.title} by {song.artist}{" "}
        </h4>
      </a>

      <h4>
        <a href={song.uri}> Click Here to listen</a>
      </h4>

      <h4> {song.liked ? <p>♥</p> : <p>♡</p>}</h4>
    </div>
  );
}

export default Song;
