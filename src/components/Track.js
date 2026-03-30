import React from "react";

function Track(props) {
  const handleClick = () => {
    if (props.isRemoval) {
      props.onRemove(props.track);
    } else {
      props.onAdd(props.track);
    }
  };

  return (
    <div style={{ borderBottom: "1px solid gray", padding: "5px" }}>
      <h3>{props.track.name}</h3>
      <p>{props.track.artist} | {props.track.album}</p>
      <button onClick={handleClick}>{props.isRemoval ? "−" : "+"}</button>
    </div>
  );
}

export default Track;