import { combineReducers } from 'redux';
import MoviesReducer from './GetMovies';
import SelectedReducer from './SelectedMovie';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  selectedMovie: SelectedReducer,
});

export default rootReducer;
