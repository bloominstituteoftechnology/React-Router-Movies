
import { SET_SELECTED_MOVIE } from '../actions';

export default (selectedMovie = null, action) => {
  // default so we don't have to name it, it's anonymous
  // null because we start with nothing
  switch (action.type) {
    // switch can take more than one case
    case SET_SELECTED_MOVIE:
      return action.payload.data;
      // give us the data from the set selected movie action
      // .data is an axios convention, in plain redux it's action.payload
      // gets data from the window object
    default:
      return selectedMovie;
      // return this when we've stopped looping
  }
};