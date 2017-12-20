
import { combineReducers } from 'redux';
// we had two reducer files, this combines them 
import MoviesReducer from './MoviesReducer';
import SelectedMovieReducer from './SelectedMovieReducer';
// these are our two reducers

const rootReducer = combineReducers({
  movies: MoviesReducer, // the state from get movies is movies
  selectedMovie: SelectedMovieReducer, // the state from selected movies is selective movies
});
// making new state frome the reducers, 
// naming types as the properties and the values as the reducers


export default rootReducer;