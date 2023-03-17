import React, { useState, useEffect } from 'react';
import "./Home.css"
import { Link, useHistory } from 'react-router-dom';
import ArtistProfile from '../Artist/ArtistProfile';
import ArtistInfo from '../ArtistInfo/ArtistInfo';
import ArtistThumbnail from '../ArtistThumbnail/ArtistThumbnail';

const HomePage = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [lastViewedArtists, setLastViewedArtists] = useState([]);
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/search?q=${searchQuery}`);
  }

  useEffect( () => {
    // fetch last viewed artists from local storage or API
    fetch('http://localhost:3001/artists/The%20Beatles')
      .then(data => {
        // read the response
        data.json().then(response => {
          // set the last viewed artists
          // convert response of single object too a map
          const artists = [response];

          setLastViewedArtists(artists);
          console.log(artists);
        });
        console.log('set');
      });
  }, []);

  return (
    <div className="home-page">
      <h1>Welcome to the World of Music</h1>
      {/* if lastViewedArtists had a value then show below */}
      {lastViewedArtists.length > 0 && (
        <div className="last-viewed-artists">
          <h2>Last Viewed Artists</h2>
          <div className="artist-info">
            <ArtistInfo artistInfo={lastViewedArtists[0]} />
          </div>
        </div>
      )}
      {/* show the last viewed artist */}
      <Link to="/search">Browse All Artists</Link>
    </div>
  );
}

export default HomePage;
