import React from "react";

function Tracklist({tracks}) {



    return (
        <div>
            <h3>This is my track list</h3>
            <ul>
                {tracks.map(track => (
                    <li key={track.key}> 
                        <span className="songname">{track.name}</span> - {track.artist} (Album: <span className="album">{track.album}</span>)
                    
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tracklist
