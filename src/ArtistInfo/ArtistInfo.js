import React from 'react';
import './ArtistInfo.css';

const ArtistInfo = ({ artistInfo}) => {
  const { name, popularity, genres } = artistInfo;

  if(!name) return null;
  if(!popularity) return null;
  if(!genres) return null;


  return (
    <div className="container">
      <div className="title">{name}</div>
      <div className="popularity">Popularity: {popularity}</div>
      {/* if genres is empty then dont show */}
        {genres.length > 0 && (
            <div className="genres">
                Genres: {genres.map((genre, index) => (
                    <span key={index}>{genre}</span>
                ))}
            </div>
        )}
    </div>
  );
};

export default ArtistInfo;
