import { GET_MOVIE_BY_ID } from '../actions';

const movieByIDReducer = (movie = {}, action) => {
  switch(action.type) {
    case GET_MOVIE_BY_ID:
      // if (action.error) return movies; //<~~~ this/catch magic?
      return action.payload.data;
    default:
      return movie;
  }
};

export default movieByIDReducer;
