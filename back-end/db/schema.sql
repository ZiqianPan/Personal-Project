DROP DATABASE IF EXISTS better_spotify;
CREATE DATABASE better_spotify; 

\c better_spotify; 

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    artist TEXT NOT NULL,
    title TEXT NOT NULL,
    uri varchar(255),
    album_url varchar(255),
    liked BOOLEAN DEFAULT false,
    duration INTEGER NOT NULL
);
