import React from 'react';
import { Link } from 'react-router-dom';
import "./ArtistThumbnail.css";
import thumbnail_blank from "../Assets/thumbnail_blank.png"

const ArtistThumbnail = ({ artist }) => (
  <Link to={`/artists/${artist.id}`} className="artist-thumbnail">
    <img src={thumbnail_blank} alt={artist.name} />
    <div className="artist-name">{artist.name}</div>
  </Link>
);

export default ArtistThumbnail;
