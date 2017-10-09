import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import singleMovieReducer from './singleMovieReducer';

export default combineReducers({
  movies: moviesReducer,
  movie: singleMovieReducer
});
