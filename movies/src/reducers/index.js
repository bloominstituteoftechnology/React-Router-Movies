import {
  GET_MOVIES,
  ADD_MOVIE,
  GET_MOVIE
} from '../actions';


export default (movies = [], action) => {
	switch(action.type) {
    case GET_MOVIES:
		  return action.payload.data;
		case ADD_MOVIE:
		  return action.payload.data;
		case GET_MOVIE:
		  return action.payload.data;
    default:
      return movies;
  }
}