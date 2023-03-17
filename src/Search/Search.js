import React, { useState } from 'react';
import './Search.css'
import { useHistory } from 'react-router-dom';
import ArtistProfile from '../Artist/ArtistProfile';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArtist, setSelectedArtist] = useState(null);
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    // search for artist and set selectedArtist
    setSelectedArtist({ name: 'John Doe', id: 1 });
  }

  const handleClear = (e) => {
    e.preventDefault();
    setSearchQuery('');
    setSelectedArtist(null);
  }

  const handleSelect = (artist) => {
    setSelectedArtist(artist);
    history.push(`/artists/${artist.id}`);
  }

  return (
    <div className="search-page">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for an artist, album or song"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
        <button type="button" onClick={handleClear}>Clear</button>
      </form>
      {selectedArtist ? (
        <ArtistProfile artist={selectedArtist} />
      ) : (
        <div className="artist-list">
          <h2>Artists</h2>
          <ul>
            <li onClick={() => handleSelect({ name: 'John Doe', id: 1 })}>John Doe</li>
            <li onClick={() => handleSelect({ name: 'John Smith', id: 2 })}>John Smith</li>
            <li onClick={() => handleSelect({ name: 'Bob Williams', id: 3 })}>Bob Williams</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchPage;
