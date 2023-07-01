import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import MovieDetail from "./Pages/MovieDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/movies/:id"
          element={<MovieDetail />}
        />
      </Routes>
    </div>
  );
}

export default App;
