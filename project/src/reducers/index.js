import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import selectedMovieReducer from './selectedMovieReducer';

const rootReducer = combineReducers({ 
  movies: moviesReducer,
  details: selectedMovieReducer,
});

export default rootReducer;