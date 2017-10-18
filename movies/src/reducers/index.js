import { combineReducers } from 'redux';
import { GET_MOVIES, GET_MOVIE } from '../actions';

const moviesReducer = (movies = [], action) => {
  switch (action.type) {
    case GET_MOVIES:
      return action.payload.data;
    default:
      return movies;
  }
};

const movieReducer = (movie = {}, action) => {
  switch (action.type) {
    case GET_MOVIE:
      return action.payload.data;
    default:
      return movie;
  }
};

const rootReducer = combineReducers({
  movies: moviesReducer,
  movie: movieReducer
});

export default rootReducer;