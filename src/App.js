import React, {useState} from 'react'
import './style/App.css';
import Tracklist from './components/Tracklist.js'

function App() {

  const definedTracks = [
    { key: 1, name: "Song 1", artist: "Artist 1", album: "Album 1"},
    { key: 2, name: "Song 2", artist: "Artist 2", album: "Album 2"},
    { key: 3, name: "Song 3", artist: "Artist 3", album: "Album 3"}
  ]

  const [searchResults, setSearchResults] = useState(definedTracks)

  return (
    <div>
      <h1>Welcome to my Jamming Spotify app</h1>
      <Tracklist tracks={searchResults}/>
    </div>
  );
}

export default App;
