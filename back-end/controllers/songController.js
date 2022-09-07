const express = require("express");
const songs = express.Router();

const {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/songs.js");

const { checkImage } = require("../validations/checkSongs");

songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  console.log(allSongs);
  if (allSongs[0]) {
    res.status(200).json({ success: true, payload: allSongs });
  } else {
    res.status(500).json({ success: false, payload: "not found" });
  }
});

songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  if (song.id) {
    res.json({ success: true, payload: song });
  } else {
    res.status(404).json({ success: false, payload: "not found" });
  }
});

songs.post("/", checkImage, async (req, res) => {
  const { body } = req;

  try {
    const song = await createSong(body);
    if (song.id) {
      res.json({ success: true, payload: song });
    } else {
      res.status(404).json({ success: false, payload: "not found" });
    }
  } catch (err) {
    console.log(err);
  }
});

//delete function
songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong.id) {
    res.status(200).json({ success: true, payload: deletedSong });
  } else {
    res.status(404).json({ success: false, payload: deletedSong });
  }
});

//update current song
songs.put("/:id", checkImage, async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const updatedSong = await updateSong(body, id);

  if (updatedSong.id) {
    res.status(200).json(updatedSong);
  } else {
    res
      .status(404)
      .json({ error: "Song could not be updated for some reason...." });
  }
});

module.exports = songs;
