import { GET_MOVIES, ADD_NEW_MOVIE } from '../actions';

export default (movies = [], action) => {
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