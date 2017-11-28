// reducers index file holy crap
import { combineReducers } from 'redux';
import MoviesReducer from './MoviesReducer';
import SingleMovieReducer from './SingleMovieReducer';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  movie: SingleMovieReducer
});

export default rootReducer;
