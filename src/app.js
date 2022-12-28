import React, { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=b723afc7";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSerchTerm] = useState(" ");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    <div className="app">
      <h1>Movieland</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSerchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies({ searchTerm })}
        />
      </div>

      {movies.length > 0 ? (
        <div className="conatainer">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h1>No movie Found</h1>
        </div>
      )}
    </div>
  );
};

export default App;
