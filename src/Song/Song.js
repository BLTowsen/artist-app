import React, { useEffect, useState } from 'react';
import './Song.css';
import '../global.css';
import { useParams } from 'react-router-dom';

const Song = () => {
  const { id } = useParams();
  const [song, setSong] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/songs/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSong(data);
      });
  }, [id]);

  const formatTime = (timeInMs) => {
    const totalSeconds = Math.floor(timeInMs / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const Release = ({ releases }) => (
    <div>
      <h3>Releases:</h3>
      <ul>
        {releases.map((release) => (
          <li key={release.id}>
            <p>{release.title}</p>
            <p>{release.date}</p>
            <p>{release.country}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  
  const Credits = ({ credits }) => (
    <div>
      <h3>Credits:</h3>
      <ul>
        {credits.map((credit) => (
          <li key={credit.artist.id}>
            <p>{credit.artist.name}</p>
            <p>{credit.artist.disambiguation}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return song ? (
    <div className="song-container">
      <div className="song-info">
        <div className="song-title"><h1>{song.title}</h1></div>
        <div className="song-length">Length: {formatTime(song.length)}</div>
        <div className="release-date">Release Date: {song.releases['first-release-date']}</div>
      </div>
      <Release
        key={song.releases.id}
        releases={song.releases.releases}
      />
      <Credits
        key={song.credits.id}    
        credits={song.credits['artist-credit']}
      />
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Song;
