import React, { useEffect, useState } from 'react';
import './Album.css';
import { Link, useParams, useHistory } from 'react-router-dom';
import defaultAlbumArt from '../Assets/default-album-art.png';

const Album = () => {
    const { id } = useParams();
    const [album, setAlbum] = useState(null);
    const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:3001/albums/${id}`)
        .then((response) => response.json())
        .then((data) => setAlbum(data));
    }, [id]);

    // function to format the song duration
    const formatDuration = (duration) => {
        const minutes = Math.floor(duration / 60000);
        const seconds = ((duration % 60000) / 1000).toFixed(0);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const handleSelect = (songId) => {
        // url encode songId
        songId = encodeURIComponent(songId);
        // route to the song page
        history.push(`/songs/${songId}`);
    };


    return album ? (
        <div className="song-list">
            <h1>{album.name}</h1>
            <div className="album-info">
                <div className="release-date">Release Date: {album.releaseDate}</div>
                <div className="cover-art">
                    <img
                        src={album.coverArt}
                        alt="album art"
                        onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = defaultAlbumArt; // set a default image here
                        }}
                    />
                </div>
            </div>
            <div className="songs">
                <h2>Songs</h2>
                <div className="song-list">
                    {album.songs.map((song, index) => (
                        <div className="song" key={index} onClick={() => handleSelect(song.id)}>
                            <div className="song">{song.title}</div>
                            <div className="duration">{formatDuration(song.length)}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    ) : (
        <div>Loading...</div>
    );
};

export default Album;
