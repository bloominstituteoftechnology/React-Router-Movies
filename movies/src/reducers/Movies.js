import {combineReducers} from 'redux';

const defaultMovies = [];
const defaultSingleMovie = {};

const MovieReducer = (state = defaultMovies, action) => {
  switch (action.type) {
    case 'GET_MOVIES':
      return [...action.movies];
    default:
      return state;
  }
};

const SingleMovieReducer = (state = defaultSingleMovie, action) => {
  switch (action.type) {
    case 'GET_SINGLE_MOVIE':
      return {...action.movie};
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  movies: MovieReducer,
  singleMovie: SingleMovieReducer
});
export default rootReducer;
