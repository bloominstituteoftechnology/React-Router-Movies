// SingleMovie reducer
import { GET_SINGLE_MOVIE } from '../actions';

export default (movie ={}, action) => {
  switch (action.type) {
      case GET_SINGLE_MOVIE:
          return action.payload.data;
      default:
          return movie;
  }
};
