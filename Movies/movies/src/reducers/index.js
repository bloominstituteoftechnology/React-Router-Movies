import { combineReducers } from 'redux';
import MoviesReducer from './GetMovies';
import SelectedReducer from './SelectedMovie';
import AddReducer from './AddMovie';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  selectedMovie: SelectedReducer,
  addMovie: AddReducer,
});

export default rootReducer;
