import React, { useState } from 'react';
import './Search.css'
import { useHistory } from 'react-router-dom';
import ArtistProfile from '../Artist/ArtistProfile';
import ArtistInfo from '../ArtistInfo/ArtistInfo';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    // search for artist and set selectedArtist
    // use the input from the form to search for an artist
    // set the selectedArtist to the first result
    // history.push(`/artists/${selectedArtist.id}`);
    const urlEncodedSearchQuery = encodeURIComponent(searchQuery);
    fetch('http://localhost:3001/artists/search/' + urlEncodedSearchQuery)
      .then(data => {
        // read the response
        data.json().then(response => {
          // set the last viewed artists
          // convert response of single object too a map
          const artists = response;

          setSearchResults(artists);
          console.log(artists);
        });
        console.log('set');
      });
  }

  const handleClear = (e) => {
    e.preventDefault();
    setSearchQuery('');
    setSelectedArtist(null);
  }

  const handleSelect = (artist) => {
    setSelectedArtist(artist);
    const urlEncodedArtistName = encodeURIComponent(artist.name);
    history.push(`/artists/${urlEncodedArtistName}`);
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
        <div className="artist-list">
          <h2>Artists</h2>
          {searchResults.map((artist, index) => (
            <div key={index} onClick={() => handleSelect(artist)}>
              <ArtistInfo artistInfo={artist} />
            </div>
          ))}
        </div>

    </div>
  );
}

export default SearchPage;
