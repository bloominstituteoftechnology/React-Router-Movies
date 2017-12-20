import { GET_MOVIES } from '../actions';
// imports our actions
// reducer DOES the action that we defined in actions

export default (movies = [], action) => {
  // default because we don't want to name the function because it's anonymous
  // IIFE????
  // takes two arguments - initial state, action
  // we use = because it sets that parameter to a default
  switch (action.type) {
    // switch can do more than one case
    case GET_MOVIES:
      return action.payload.data;
      // returns whatever action payload we give it
    default:
      return movies;
      // return that whole state
  }
};

