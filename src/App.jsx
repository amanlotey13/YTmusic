import React from "react";
import { useNavigate } from "react-router-dom";
import { songs } from "./Data";

function App() {
  return (
    <div className=" main flex ">
      <div className="left border">
        <div className="logo">
          <img className="invert" src="logo.svg" alt="" />
        </div>
        <div className="home bg-grey rounded ">
          <ul>
            <li>
              <img className="invert" src="home.svg" alt="home" />
              Home
            </li>
            <li>
              <img className="invert" src="search.svg" alt="search" />
              Search box
            </li>
          </ul>
        </div>

        <div className="library bg-grey text-white rounded-lg flex items-center p-4 space-x-4">
          <img
            className="lib-logo invert w-6 h-6"
            src="library.svg"
            alt="Library Icon"
          />
          <h3 className="text-lg font-semibold">Your Library</h3>
        </div>

        <footer className="footer">
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Help</a>
            <a href="#">About</a>
          </div>
          <p>© 2025 Spotify Clone. All rights reserved.</p>
        </footer>
      </div>

      <div className="right border">
        <div className="nav">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </div>

          <div className="buttons">
            <button className="signupbtn">Signup</button>
            <button className="loginbtn">Login</button>
          </div>
        </div>

        <div className="spotify-playlist">
          <h1>Spotify Playlists</h1>

          <div className="songcont">
            {songs.map((song) => (
              <div key={song.id} className="card">
                <img
                  src={song.imgSrc}
                  alt={song.title}
                  className="song-image"
                  onError={(e) =>
                    (e.target.src = "https://via.placeholder.com/150")
                  }
                />
                <h3>{song.title}</h3>
                <p>{song.artist}</p>
                <p>
                  <strong>Album:</strong> {song.album}
                </p>
                <p>
                  <strong>Duration:</strong> {song.duration}
                </p>
                <audio controls>
                  <source
                    src={song.audioSrc}
                    type="audio/mpeg"
                    onError={(e) => (e.target.src = "")}
                  />
                  Your browser does not support the audio element.
                </audio>
              </div>
            ))}
          </div>
        </div>

        <div className="playbar">
          <div className="songinfo">

          </div>
  {/* Previous Button */}
  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24" fill="black">
    <path d="M18 6l-8.5 6 8.5 6V6zm-9 0v12h-2V6h2z" />
  </svg>
  {/* Play Button */}
  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24" fill="black">
    <path d="M8 5v14l11-7z" />
  </svg>
  {/* Next Button */}
  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24" fill="black">
    <path d="M6 18l8.5-6L6 6v12zm9-12v12h2V6h-2z" />
  </svg>
  <div className="songtime">
    
  </div>
        </div>
      </div>
    </div>
  );
}

export default App;
