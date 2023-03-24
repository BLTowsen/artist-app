import React, { useEffect, useState } from 'react';
import './ArtistProfile.css';
import albumArt from '../Assets/album_art.jpg';
import { Link, useParams } from 'react-router-dom';

const ArtistProfile = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState({
    name: '',
    genres: [],
    popularity: 0,
    mbid: '',
    albums: [],
  });

  useEffect(() => {
    const artistName = id;
    fetch(`http://localhost:3001/artists/${artistName}`).then((data) => {
      data.json().then((response) => {
        setArtist(response);
      });
    });
  }, [id]); // add id as a dependency

  // add a handleSelect that routes to the album page when an album is clicked
  const handleSelect = (albumId) => {
    // url encode albumId
    albumId = encodeURIComponent(albumId);
    // route to the album page
    window.location.href = `/albums/${albumId}`;
  };


  // add a conditional check to only render the component once artist state variable has been updated
  return artist.name ? (
    <div className="artist-profile">
      <h1>{artist.name}</h1>
      <div className="artist-info">
        <div className="genres">
          Genres:{' '}
          {artist.genres.map((genre, index) => (
            <span key={index}>{genre}</span>
          ))}
        </div>
        <div className="popularity">Popularity: {artist.popularity}</div>
        <div className="mbid">MBID: {artist.mbid}</div>
        {/* section for aliases of artist */}
        <div className="aliases">
          Aliases:{' '}
          {artist.aliases.map((alias, index) => (
            <span key={index}>{alias['sort-name']}</span>
          ))}
        </div>
      </div>
      {/* add an albums section */}
      <div className="albums">
        <h2>Albums</h2>
        <div className="album-list">
          {artist.albums.map((album, index) => (
            // add a click handler to the album div
            <div className="album" key={index} onClick={() => handleSelect(album.id)}>
              <div className="album-info">
                <div className="album-title">{album.title}</div>
                <div className="album-release-date">
                  Release Date: {album.releaseDate}
                </div>
              </div>
              <div className="album-art">
              <img src={album.coverArt} alt="album art" /><img src={album.coverArt} alt="album art" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : null;
};

export default ArtistProfile;