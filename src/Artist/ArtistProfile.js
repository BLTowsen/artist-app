import React, { useEffect, useState } from 'react';
import "./ArtistProfile.css"
import albumArt from "../Assets/album_art.jpg";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const ArtistProfile = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState({
    name: '',
    genres: [],
    popularity: 0,
    mbid: ''
  });

  useEffect(() => {
    const artistName = id;
    fetch(`http://localhost:3001/artists/${artistName}`)
      .then(data => {
        data.json().then(response => {
          setArtist(response);
        });
      });
  }, [id]); // add id as a dependency

  // add a conditional check to only render the component once artist state variable has been updated
  return artist.name ? (
    <div className="artist-profile">
      <h1>{artist.name}</h1>
      <div className="artist-info">
        <div className="genres">
          Genres: {artist.genres.map((genre, index) => <span key={index}>{genre}</span>)}
        </div>
        <div className="popularity">Popularity: {artist.popularity}</div>
        <div className="mbid">MBID: {artist.mbid}</div>
      </div>
    </div>
  ) : null;
}

export default ArtistProfile;
