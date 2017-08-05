import { combineReducers } from 'redux';

import moviesReducer from './GetMoviesReducer';
import movieByIDReducer from './GetMovieByIDReducer';


const rootReducer = combineReducers({
  movies: moviesReducer,
  movieID: movieByIDReducer
});

export default rootReducer;
