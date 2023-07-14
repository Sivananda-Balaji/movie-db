import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

const movieHeaderStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  backgroundColor: "#de8703",
  borderRadius: "2rem",
  color: "black",
  fontWeight: "600",
  fontFamily: "sans-serif",
  width: "8rem",
  margin: "auto",
};

const linkStyle = {
  marginLeft: "2rem",
  color: "white",
  textDecoration: "none",
};

const MovieHeader = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={movieHeaderStyle}>
            Movie DB
          </Typography>
          <Box>
            <Link style={linkStyle} to="/new">
              New Releases
            </Link>
            <Link style={linkStyle} to="/hot">
              What's Hot
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default MovieHeader;
