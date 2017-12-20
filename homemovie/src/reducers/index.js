import { combineReducers } from 'redux';

import { GET_MOVIES } from'../actions';
import { SET_SELECTED_MOVIE } from '../actions';

const MoviesReducer = (movies = [], action) => {
  switch (action.type) {
    case GET_MOVIES: 
      return action.payload.data;
    default:
      return movies; 
  }
};
const SelectedMovieReducer = (selectedMovie = null, action)
 switch (action.type) {
   case SET_SELECTED_MOVIE: 
     return action.payload.data; 
   default: 
     return seletedMovie; 
 }
};

const rootReducer = combineReducers({
  movies: MoviesReducer, 
  selectedMovie: SelectedMovieReducer,
});

export default rootReducer;