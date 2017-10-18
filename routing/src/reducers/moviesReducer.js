import { GET_ALL_MOVIES, ADD_MOVIE } from '../actions';

const moviesReducer = (movies = [], action) => {
  switch (action.type) {
    case GET_ALL_MOVIES:
    case ADD_MOVIE:
      return action.payload.data;
    default:
      return movies;
  }
};

export default moviesReducer;
