import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieListItem from "./MovieListItem";

const gridStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const getPopularMovies = async () => {
    try {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/popular",
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTUzNWEzZTFhODJlNmZjYmQ1N2QyZDYyOGE4ZDA3NyIsInN1YiI6IjY0YWZlNGI1ZDY1OTBiMDBjN2FkZGEyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZdmG0BiTry6qm4QEszSkyDfLvWhPJhEdMxumbT5N8Do",
        },
      };

      const result = await axios.request(options);
      setMovies(result.data.results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <div style={gridStyle}>
      <MovieListItem movies={movies} />
    </div>
  );
};

export default MovieList;
