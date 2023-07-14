import React from "react";
import { Typography } from "@mui/material";

const footerStyle = {
  backgroundColor: "#cccccc",
  padding: "1rem",
  position: "relative",
  bottom: "0",
};

const MovieFooter = () => {
  return (
    <footer>
      <Typography variant="body2" align="center" sx={footerStyle}>
        upGrad Frontend Hackathon
      </Typography>
    </footer>
  );
};

export default MovieFooter;
