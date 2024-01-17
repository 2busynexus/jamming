// Tracklist.js
import React from "react";

function Tracklist({ tracks, addTrackToPlaylist, removeTrackFromPlaylist }) {
  return (
    <div className="container">
      <h3 className="text-center mb-3">This is my track list</h3>
      <ul className="list-group">
        {tracks.map((track) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={track.id}>
            <span className="fw-bold">{track.name}</span> - {track.artist} (Album: {track.album})
            <div>
              <button className="btn btn-primary me-2" onClick={() => addTrackToPlaylist(track)}>
                Add to Playlist
              </button>
              <button className="btn btn-danger" onClick={() => removeTrackFromPlaylist(track.id)}>
                Remove from Playlist
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tracklist;
