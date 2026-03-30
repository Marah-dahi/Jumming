import React from "react";
import Track from "./Track";

function SearchResults(props) {
  return (
    <div>
      <h2>Results</h2>
      {props.tracks.map(track => (
        <Track key={track.id} track={track} onAdd={props.onAdd} isRemoval={false}/>
      ))}
    </div>
  );
}

export default SearchResults;