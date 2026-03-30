import React from "react";
import Track from "./Track";

function Playlist(props) {
  return (
    <div>
      <h2>My Playlist</h2>
      {props.tracks.map(track => (
        <Track key={track.id} track={track} onRemove={props.onRemove} isRemoval={true} />
      ))}
    </div>
  );
}

export default Playlist;