import React, { useState, useEffect } from 'react';
import "./Home.css"
import { Link, useHistory } from 'react-router-dom';
import ArtistProfile from '../Artist/ArtistProfile';
import ArtistThumbnail from '../ArtistThumbnail/ArtistThumbnail';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [lastViewedArtists, setLastViewedArtists] = useState([]);
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/search?q=${searchQuery}`);
  }

  useEffect(() => {
    // fetch last viewed artists from local storage or API
    const storedArtists = [{id: '1', name: 'John Doe'}, { id: '2', name: "Steve Brown"}, {id: '3', name: "Albus Johnson"}];
    if (storedArtists) {
      setLastViewedArtists(storedArtists);
    }
  }, []);

  return (
    <div className="home-page">
      <h1>Welcome to the World of Music</h1>
      <h2>Last Viewed Artists</h2>
      <div className="artist-list">
      {lastViewedArtists.map(artist => (
        <ArtistThumbnail key={artist.id} artist={artist} />
      ))}
      </div>
      <Link to="/search">Browse All Artists</Link>
    </div>
  );
}

export default HomePage;
