import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";

function App() {
  // Playlist state
  const [playlistTracks, setPlaylistTracks] = useState([]);

  // Mock search results
  const tracks = [
    { id: 1, name: "Song A", artist: "Artist A", album: "Album A" },
    { id: 2, name: "Song B", artist: "Artist B", album: "Album B" },
    { id: 3, name: "Song C", artist: "Artist C", album: "Album C" },
  ];

  // Add track to playlist
  const addTrack = (track) => {
    // Avoid duplicates
    if (!playlistTracks.find(t => t.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  // Remove track from playlist
  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter(t => t.id !== track.id));
  };

  return (
    <div>
      <h1>Jammming 🎵</h1>
      <SearchBar />
      <div style={{ display: "flex", gap: "50px" }}>
        <SearchResults tracks={tracks} onAdd={addTrack} />
        <Playlist tracks={playlistTracks} onRemove={removeTrack} />
      </div>
    </div>
  );
}

export default App;