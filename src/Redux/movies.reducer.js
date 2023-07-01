import {
  ADD_MOVIE,
  DELETE_MOVIE,
  GET_MOVIE,
  GET_SINGLE_MOVIE,
  MOVIE_ERROR,
  MOVIE_LOADING,
  UPDATE_MOVIE,
} from "./movies.types";

const initialState = {
  movies: [], //* for storing movies data
  movie: {}, //* for storing single movie data
  loading: false,
  error: false,
};

// * To update the state based upon the actions
export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MOVIE_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case MOVIE_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    case GET_MOVIE: {
      return {
        ...state,
        movies: payload,
        loading: false,
      };
    }
    case GET_SINGLE_MOVIE: {
      return {
        ...state,
        movie: payload,
        loading: false,
      };
    }
    case ADD_MOVIE:
    case UPDATE_MOVIE:
    case DELETE_MOVIE: {
      return {
        ...state,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
