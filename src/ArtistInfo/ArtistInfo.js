import React from 'react';
import './ArtistInfo.css';

const ArtistInfo = ({ artistInfo}) => {
  const { name, popularity, genres, mbid } = artistInfo;

  return (
    <div className="container">
      <div className="title">{name}</div>
      <div className="popularity">Popularity: {popularity}</div>
      <div className="genres">
        Genres: {genres.map((genre, index) => <span key={index}>{genre}</span>)}
      </div>
      <div className="mbid">MBID: {mbid}</div>
    </div>
  );
};

export default ArtistInfo;
