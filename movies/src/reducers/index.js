import { GET_MOVIES, ADD_NEW_MOVIE, GET_SELECT_MOVIE } from '../actions';
import { combineReducers } from 'redux';

const MoviesReducer =  (movies = [], action) => {
  switch (action.type) {
    case GET_MOVIES:
      return action.payload.data;
    case ADD_NEW_MOVIE:
    const movie = action.payload.data;
      return movies.concat(movie);
    default:
      return movies;
  }
};

const GetSelectMovieReducer = (selectMovie = null, action) => {
  switch (action.type) {
    case GET_SELECT_MOVIE:
      return action.payload.data;
    default:
      return selectMovie;
  }
}

const rootReducer = combineReducers({
  movies: MoviesReducer,
  selectMovie: GetSelectMovieReducer
});

export default rootReducer;