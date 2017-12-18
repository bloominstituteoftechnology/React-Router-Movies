import MoviesReducer from './MoviesReducer';
import SelectMovieReducer from './SelectMovie';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  selectMovie: SelectMovieReducer
});

export default rootReducer;