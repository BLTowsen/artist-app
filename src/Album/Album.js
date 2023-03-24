import React, { useEffect, useState } from 'react';
import './Album.css';
import { Link, useParams } from 'react-router-dom';

const Album = () => {
  const { albumId } = useParams();
  const [album, setAlbum] = useState({
    title: '',
    artist: '',
    releaseDate: '',
    coverArt: '',
    songs: [],
  });

  useEffect(() => {
    fetch(`http://localhost:3001/albums/${albumId}`).then((data) => {
      data.json().then((response) => {
        setAlbum(response);
      });
    });
  }, [albumId]); // add albumId as a dependency

  // add a conditional check to only render the component once album state variable has been updated
  return album.title ? (
    <div className="song-list">
      <h1>{album.title}</h1>
      <div className="album-info">
        <div className="artist">{album.artist}</div>
        <div className="release-date">Release Date: {album.releaseDate}</div>
        <div className="cover-art">
          <img src={album.coverArt} alt="album art" />
        </div>
      </div>
      {/* add a songs section */}
      <div className="songs">
        <h2>Songs</h2>
        <div className="song-list">
          {album.songs.map((song, index) => (
            <div className="song" key={index}>
              <div className="song-info">
                <div className="song-title">{song.title}</div>
                <div className="song-length">{song.length}</div>
              </div>
              <div className="song-play">
                <Link to={`/play/${song.id}`}>Play</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : null;
};

export default Album;
