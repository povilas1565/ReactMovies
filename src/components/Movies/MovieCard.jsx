import React from "react";
import styles from "./MovieCard.module.css";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { deleteMovie, updateMovie } from "../../Redux/movies.actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  // * It will edit the movie with the new updated Data
  const editMovie = (updatedMovieData) => {
    dispatch(updateMovie(updatedMovieData, movie.id, toast));
  };

  // * It will delete the movie
  const removeMovie = () => {
    dispatch(deleteMovie(movie.id, toast));
  };

  const getFormData = (updatedMovieData) => {
    // * removing empty data key so that it will not hamper the original data in the data base

    for (let key in updatedMovieData) {
      if (
        updatedMovieData[key] === "" ||
        (Array.isArray(updatedMovieData[key]) &&
          updatedMovieData[key].length === 0)
      ) {
        delete updatedMovieData[key];
      }
    }
    // * calling editMovie with the new Data
    editMovie(updatedMovieData);
  };

  return (
    <div className={styles.movieCard}>
      <div className={styles.separate}>
        <div>
          <Modal
            icon={<FiEdit />}
            getFormData={getFormData}
          />
        </div>
        <div>
          <button onClick={removeMovie}>
            <MdOutlineDelete />
          </button>
        </div>
      </div>
      <img
        src={movie.Poster}
        alt={movie.Title}
      />
      <Link to={`movies/${movie.id}`}>
        <div className={styles.description}>
          <h2>{movie.Title}</h2>
          <p>{movie.Genre}</p>
          <p>{movie.Year}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
