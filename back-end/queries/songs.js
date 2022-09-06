const db = require("../db/dbConfig.js");

//get all of the songs data.
const getAllSongs = async () => {
    try {
     const allSongs = await db.any("SELECT * FROM songs");
     return allSongs;
    } catch(err) {
      return err
    } 
}

//get individual song data.
const getSong = async (id) => {
    try {
      const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id);
      return oneSong;
    } catch (error) {
      return error;
    }
  };


  //Create song 
  const createSong = async (song) => {
    const { artist,title,uri,albumUrl,liked,duration} = song;
    try {
      const newSong = await db.one(
        "INSERT INTO songs (artist,title,uri,albumUrl,liked,duration) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        [artist,title,uri,albumUrl,liked,duration]
      );
      return newSong;
    } catch (error) {
      return error;
    }
  };

//deleteing a Song
  const deleteSong = async (id) => {
    try {
      const deletedSong = await db.one("DELETE FROM songs WHERE id = $1 RETURNING *", id);
      return deletedSong;
    } catch (err) {
      return err;
    }
  };

//udpate existing song
  const updateSong = async (song, id) => {
    const {artist,title,uri,albumUrl,liked,duration} = song;
    try {
    
      const updatedSong = await db.one("UPDATE songs SET artist = $1, title = $2, uri = $3, albumUrl = $4, liked = $5, duration = $6 WHERE id = $7 RETURNING *",
      [artist,title,uri,albumUrl,liked,duration, id]);
      return updatedSong;

    } catch (err) {
      return err;
    }
  }



module.exports = { getAllSongs, getSong, createSong, deleteSong, updateSong };
