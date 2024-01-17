// App.js
import React, { useState, useEffect } from 'react';
import Tracklist from './components/Tracklist';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';

function App() {
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const updatePlaylistName = (newName) => {
    setPlaylistName(newName);
  };

  const addTrackToPlaylist = (track) => {
    if (!playlistTracks.some((playlistTrack) => playlistTrack.id === track.id)) {
      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    }
  };

  const removeTrackFromPlaylist = (trackId) => {
    setPlaylistTracks((prevTracks) => prevTracks.filter((track) => track.id !== trackId));
  };

  const searchSpotify = (searchTerm) => {
    // Make a request to Spotify API for tracks
    // Replace 'YOUR_ACCESS_TOKEN' with the actual access token obtained from Spotify
    const accessToken = 'YOUR_ACCESS_TOKEN';
    
    fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(response => response.json())
      .then(data => {
        const tracks = data.tracks.items.map(item => ({
          id: item.id,
          name: item.name,
          artist: item.artists[0].name,
          album: item.album.name,
          uri: item.uri
        }));
        setSearchResults(tracks);
      })
      .catch(error => console.error('Error fetching data from Spotify:', error));
  };

  useEffect(() => {
    // You may want to include additional logic here when the component mounts
  }, []);

  return (
    <div className="container-fluid bg-dark vh-100 text-light">
      <h1 className="p-5 text-center">Welcome to my Jamming Spotify app</h1>
      <div className="row">
        <div className="col p-5 m-5">
          <SearchBar onSearch={searchSpotify} />
          <Tracklist
            tracks={searchResults}
            addTrackToPlaylist={addTrackToPlaylist}
            removeTrackFromPlaylist={removeTrackFromPlaylist}
          />
        </div>
        <div className="col bg-success p-5 m-5">
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            updatePlaylistName={updatePlaylistName}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
