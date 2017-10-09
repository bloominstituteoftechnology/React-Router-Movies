import { GET_MOVIE} from '../actions';

const singleMovieReducer = (movie = {}, action) => {
  switch (action.type) {
    case GET_MOVIE:
      return action.payload.data;
    default:
      return movie;
  }
};

export default singleMovieReducer;
