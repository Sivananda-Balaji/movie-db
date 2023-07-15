import { Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import React, { useEffect, useState } from "react";
import axios from "axios";
import NewMoviesItem from "./NewMoviesItem";

const titleStyle = {
  textAlign: "center",
  margin: "1rem",
};
const carouselStyle = {
  paddingBottom: "1rem",
};

const NewMovies = () => {
  const [newMovies, setNewMovies] = useState([]);
  const getNewMovies = async () => {
    try {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/now_playing",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTUzNWEzZTFhODJlNmZjYmQ1N2QyZDYyOGE4ZDA3NyIsInN1YiI6IjY0YWZlNGI1ZDY1OTBiMDBjN2FkZGEyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZdmG0BiTry6qm4QEszSkyDfLvWhPJhEdMxumbT5N8Do",
        },
      };

      const newMoviesList = await axios.request(options);
      setNewMovies(newMoviesList.data.results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getNewMovies();
  }, []);
  return (
    <>
      <Typography variant="h3" component="h1" sx={titleStyle}>
        New Releases 🍿
      </Typography>
      <Carousel sx={carouselStyle}>
        {newMovies.map((newMovie) => (
          <NewMoviesItem key={newMovie.id} newMovie={newMovie} />
        ))}
      </Carousel>
    </>
  );
};

export default NewMovies;
