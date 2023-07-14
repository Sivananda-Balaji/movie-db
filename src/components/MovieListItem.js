import React from "react";
import {
  Typography,
  Grid,
  Paper,
  Divider,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";

const titleStyle = {
  textAlign: "center",
  margin: "1rem",
};

const gridItemStyle = {
  boxShadow: "none",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  paddingTop: "1rem",
};

const divderStyle = {
  marginTop: "1rem",
  width: "100%",
};
const MovieListItem = ({ movies }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Typography variant="h3" component="h1" sx={titleStyle}>
        What's Hot 🔥
      </Typography>
      <Box
        sx={{
          width: isSmallScreen ? "88%" : "75%",
          marginBottom: "1rem",
        }}
      >
        <Grid container spacing={2}>
          {movies.map((movie) => {
            return (
              <Grid item xs={6} sm={4} md={3} key={movie.id}>
                <Paper sx={gridItemStyle}>
                  <img
                    src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                    alt={movie.title}
                    width="175rem"
                    align="center"
                  />
                  <Typography variant="body1" component="p">
                    {movie.vote_average} ⭐
                  </Typography>
                  <Typography variant="body1" component="p">
                    {movie.title}
                  </Typography>
                  <Divider sx={divderStyle} />
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default MovieListItem;
