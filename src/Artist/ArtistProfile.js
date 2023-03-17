import React, { useEffect } from 'react';
import "./ArtistProfile.css"
import albumArt from "../Assets/album_art.jpg";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
// add artist variable to the props
const ArtistProfile = () => {
  const { id } = useParams();
  // create a state variable for the artist
  const [artist, setArtist] = React.useState({
    name: '',
    genres: [],
    popularity: 0,
    mbid: ''
  });

  // get artist name from url params
  useEffect(() => {
    // get the artist name from the url
    const artistName = id;
    // fetch the artist info
    fetch(`http://localhost:3001/artists/${artistName}`)
      .then(data => {
        // read the response
        data.json().then(response => {
          // set the artist state variable
          setArtist(response);
        });
      });
  }, []);

  return (
    // get musician name from artist variable
    <div className="artist-profile">
      <h1>{artist.name}</h1>
      <div className="artist-info">
        {/* list the genres */}
        <div className="genres">
          Genres: {artist.genres.map((genre, index) => <span key={index}>{genre}</span>)}
        </div>
        {/* list the popularity */}
        <div className="popularity">Popularity: {artist.popularity}</div>
        {/* list the mbid */}
        <div className="mbid">MBID: {artist.mbid}</div>
      </div>
    </div>

  );
}

export default ArtistProfile;
