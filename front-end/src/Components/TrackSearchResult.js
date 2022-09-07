import React, { useState } from "react";

export default function TrackSearchResult({ track, chooseTrack, addToIndex }) {
  const API = process.env.REACT_APP_API_URL;

  function handlePlay() {
    chooseTrack(track);
  }

  function handleAdd() {
    addToIndex(track);
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
