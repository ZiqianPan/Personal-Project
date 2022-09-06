DROP DATABASE IF EXISTS better_spotify;
CREATE DATABASE better_spotify; 

\c better_spotify; 

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    artist TEXT NOT NULL,
    title TEXT NOT NULL,
    uri varchar(255),
    albumUrl varchar(255),
    liked BOOLEAN DEFAULT false,
    duration INTEGER NOT NULL
);

--  artist: track.artists[0].name,
--             title: track.name,
--             uri: track.uri,
--             albumUrl: smallestAlbumImage.url,
--             duration : track.duration_ms

