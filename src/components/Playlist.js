import React, { useState } from "react"

function Playlist({ playlistName, playlistTracks, updatePlaylistName }) {
  const [isEditing, setIsEditing] = useState(false)
  const [newName, setNewName] = useState(playlistName)

  const handleEditClick = () => {
    setIsEditing(true)
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  };

  const handleBlur = () => {
    setIsEditing(false)
    updatePlaylistName(newName)
  };

  return (
    <div className="container">
      <h3 className="text-center mb-3" onClick={handleEditClick}>
        {isEditing ? (
          <input
            type="text"
            value={newName}
            onChange={handleNameChange}
            onBlur={handleBlur}
            className="form-control mb-2"
          />
        ) : (
          `This is playlist ${playlistName}`
        )}
      </h3>
      <input
        type="text"
        value={playlistName}
        onChange={(e) => updatePlaylistName(e.target.value)}
        className="form-control mb-3"
      />
      <ul className="list-group">
        {playlistTracks.map((track) => (
          <li key={track.id} className="list-group-item">
            {track.name} - {track.artist} (Album: {track.album})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Playlist
