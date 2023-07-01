import React, { useEffect } from "react";
import styles from "./Movies.module.css";
import { useSelector } from "react-redux";

import MovieCard from "./MovieCard";

const Movies = ({ fetchAllMovies }) => {
  //* accessing movies from redux state
  const { movies } = useSelector((state) => state);

  useEffect(() => {
    //* calling the fetchAllMovies to get all the movie in the mounting phase
    fetchAllMovies();
  }, []);

  return (
    <div className={styles.movies}>
      <div className={styles.movieContainer}>
        {/* Mapping all the movies */}
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
};

export default Movies;
