import axios from "axios";
import {
  ADD_MOVIE,
  DELETE_MOVIE,
  GET_MOVIE,
  GET_SINGLE_MOVIE,
  MOVIE_LOADING,
  UPDATE_MOVIE,
} from "./movies.types";

axios.defaults.baseURL = `${process.env.REACT_APP_URL}`;

//* To Get all the Movies
export const getMovies = (query, toast, msg) => async (dispatch) => {
  //* start Loading
  dispatch({ type: MOVIE_LOADING });
  try {
    //* calling api to get movies data
    const moviesData = await axios.get(`/movies?${query}`);

    //* Updated the redux state with the movies
    dispatch({ type: GET_MOVIE, payload: moviesData.data });

    //* Toast Msg
    toast(msg);
  } catch (err) {
    //* Handling Error
    console.log("err:", err);
    toast.error(err.message);
  }
};

//* To Add Movies
export const addMovie = (newMovieData, toast) => async (dispatch) => {
  //* start Loading
  dispatch({ type: MOVIE_LOADING });
  try {
    //* calling api to add new movie data
    await axios.post(`/movies`, {
      ...newMovieData,
    });

    //* Updated the redux state with the new Movies
    dispatch({ type: ADD_MOVIE });
    dispatch(getMovies("", toast, "New Movie Added"));
  } catch (err) {
    //* Handling Error
    console.log("err:", err);
    toast.error(err.message);
  }
};

//* To Update Movies
export const updateMovie =
  (changedData, movieId, toast) => async (dispatch) => {
    //* start Loading
    dispatch({ type: MOVIE_LOADING });
    try {
      //* calling api to updated  changes in movie data of id movieId
      await axios.patch(`/movies/${movieId}`, {
        ...changedData,
      });

      //* Updated the redux state with the new Movies
      dispatch({ type: UPDATE_MOVIE });
      dispatch(getMovies("", toast, "Movie Data Updated"));
    } catch (err) {
      //* Handling Error
      console.log("err:", err);
      toast.error(err.message);
    }
  };

//* To delete Movies
export const deleteMovie = (movieId, toast) => async (dispatch) => {
  //* start Loading
  dispatch({ type: MOVIE_LOADING });
  try {
    //* calling api to delete movie of id movieId
    await axios.delete(`/movies/${movieId}`);

    //* update the redux state with the updated Movies
    dispatch({ type: DELETE_MOVIE });
    dispatch(getMovies("", toast, "Movie Deleted"));
  } catch (err) {
    //* Handling Error
    console.log("err:", err);
    toast.error(err.message);
  }
};

export const getSingleMovie = (movieId, toast) => async (dispatch) => {
  //* start Loading
  dispatch({ type: MOVIE_LOADING });
  try {
    //* calling api to get movies data
    const moviesData = await axios.get(`/movies/${movieId}`);

    //* Updated the redux state with the movies
    dispatch({ type: GET_SINGLE_MOVIE, payload: moviesData.data });
  } catch (err) {
    //* Handling Error
    console.log("err:", err);
    toast.error(err.message);
  }
};
