import { Box, Divider, Paper, Typography } from "@mui/material";
import React from "react";

const backdropStyle = {
  display: "flex",
  justifyContent: "center",
};

const movieDetails = {
  display: "flex",
  justifyContent: "center",
  alignItems: "top",
  width: "50%",
  margin: "1.2rem auto",
};

const dividerStyles = {
  width: "80%",
  margin: "0 auto",
  borderBottomWidth: "0.1rem",
};

const NewMoviesItem = ({ newMovie }) => {
  return (
    <Paper sx={{ boxShadow: "none" }}>
      <Box sx={backdropStyle}>
        <img
          src={`https://image.tmdb.org/t/p/w780${newMovie.backdrop_path}`}
          alt={newMovie.title}
          width="60%"
        />
      </Box>
      <Box sx={movieDetails}>
        <img
          src={`https://image.tmdb.org/t/p/w342${newMovie.poster_path}`}
          alt={newMovie.title}
          style={{ marginRight: "1.5rem" }}
        />
        <Box>
          <Typography variant="h4">{newMovie.title}</Typography>
          <Typography variant="body1">{newMovie.vote_average} ⭐</Typography>
          <Typography variant="body1">{newMovie.overview}</Typography>
        </Box>
      </Box>
      <Divider sx={dividerStyles} />
    </Paper>
  );
};

export default NewMoviesItem;
