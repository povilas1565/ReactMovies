import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleMovie } from "../Redux/movies.actions";
import styles from "../styles/MovieDetail.module.css";

const MovieDetail = () => {
  // * accessing movie id from params
  const { id } = useParams();
  const dispatch = useDispatch();

  // *  accessing single movie from redux state
  const { movie } = useSelector((state) => state);

  // * passing get single movie action on mounting phase
  useEffect(() => {
    dispatch(getSingleMovie(id));
  }, []);

  return (
    <div>
      <Navbar />

      <div className={styles.movieContainer}>
        <div className={styles.image}>
          <img
            src={movie?.Poster}
            alt={movie?.Title}
          />
        </div>
        <div className={styles.descriptions}>
          <h1>{movie?.Title}</h1>
          <p>
            <span>Year: </span>
            <span>{movie.Year}</span>
          </p>
          <p>
            <span>Released Date: </span>
            <span>{movie.Released}</span>
          </p>
          <p>
            <span>Runtime: </span>
            <span>{movie.Runtime}</span>
          </p>
          <p>
            <span>Genre: </span>
            <span>{movie.Genre}</span>
          </p>
          <p>
            <span>Director: </span>
            <span>{movie.Director}</span>
          </p>
          <p>
            <span>Writer: </span>
            <span>{movie.Writer}</span>
          </p>
          <p>
            <span>Actors: </span>
            <span>{movie.Actors}</span>
          </p>

          <p>
            <span>Language: </span>
            <span>{movie.Language}</span>
          </p>
          <p>
            <span>Country: </span>
            <span>{movie.Country}</span>
          </p>
          <p>
            <span>Imdb Rating: </span>
            <span>{movie.imdbRating}</span>
          </p>
          <p>
            <span>Imdb Votes: </span>
            <span>{movie.imdbVotes}</span>
          </p>

          <p>
            <span>Story: </span>
            <span>{movie.Plot}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
