import React from 'react';
import "./ArtistProfile.css"
import albumArt from "../Assets/album_art.jpg";

const ArtistProfile = () => {
  return (
    <div className="artist-profile">
      <div className="artist-name">
        <h1>John Doe</h1>
      </div>
      <div className="artist-bio">
        <p>John Doe is a talented artist based in New York City. She has been creating great music for the past 10 years. John's work is inspired by nature and her surroundings</p>
      </div>
      <div className="artist-works">
        <h2>Albums</h2>
        <div className="artwork-preview">
          <img src={albumArt} alt="Artwork 1" />
          <h3>Album 1</h3>
        </div>
        <div className="artwork-preview">
          <img src={albumArt} alt="Artwork 2" />
          <h3>Album 2</h3>
        </div>
        <div className="artwork-preview">
          <img src={albumArt} alt="Artwork 3" />
          <h3>Album 3</h3>
        </div>
      </div>
      <div className="artist-contact">
        <h2>Contact</h2>
        <p>Email: john@doe.com</p>
        <p>Phone: 555-555-1212</p>
      </div>
    </div>
  );
}

export default ArtistProfile;
