import { combineReducers } from "redux";
import movieReducer from "./movieReducer";

import { firestoreReducer } from "redux-firestore";

export default combineReducers({
  movie: movieReducer,
  firestore: firestoreReducer

import authReducer from "./authReducer";

export default combineReducers({
  movie: movieReducer,
  authReducer

});