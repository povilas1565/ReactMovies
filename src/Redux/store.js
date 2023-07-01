import { applyMiddleware, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { movieReducer } from "./movies.reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  movieReducer,
  composeEnhancer(applyMiddleware(thunk))
);
