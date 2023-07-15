import React from "react";
import MovieHeader from "./components/MovieHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import NewMovies from "./components/NewMovies";
import MovieFooter from "./components/MovieFooter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MovieHeader />
        <Routes>
          <Route path="/new" element={<NewMovies />} />
          <Route path="/hot" element={<MovieList />} />
        </Routes>
        <MovieFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
