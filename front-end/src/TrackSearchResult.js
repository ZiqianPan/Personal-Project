import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function TrackSearchResult({ track, chooseTrack, addToIndex }) {
  // {console.log(track)}
  const API = process.env.REACT_APP_API_URL;
  const [addSong, SetAddSong] = useState(false);
  const navigate = useNavigate();

  const [song, setSong] = useState({
    artist: "",
    title: "",
    uri: "",
    liked: false,
    album_url: "",
    duration: "",
  });

  function handlePlay() {
    // console.log(track) - track has all the info I need  - i need to use it to make a
    //post request i think.
    chooseTrack(track);
  }

  function handleAdd() {
    addToIndex(track);
    // navigate("/songs");
  }

  return (
    <div
      className="d-flex m-2 align-items-center"
      style={{ cursor: "pointer" }}
    >
      <img src={track.album_url} style={{ height: "64px", width: "64px" }} />

      <div
        onClick={handlePlay}
        className="ml-3"
        style={{ padding: "5px", paddingLeft: "10px" }}
      >
        <div>{track.title}</div>
        <div className="text-muted">{track.artist}</div>
      </div>

      <button onClick={handleAdd}>Add Song to Recommanded</button>
    </div>
  );
}
