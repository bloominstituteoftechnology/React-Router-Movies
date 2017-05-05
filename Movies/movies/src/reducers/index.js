import { combineReducers } from 'redux';
import MoviesReducer from './LoadMovie';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  movie: MoviesReducer,
});

export default rootReducer;
