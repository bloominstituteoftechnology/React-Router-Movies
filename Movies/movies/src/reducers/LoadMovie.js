import { SELECT_MOVIE, GET_MOVIES } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case GET_MOVIES:
      return action.payload.data;
    case SELECT_MOVIE:
      console.log(action);
      return action.payload.data;
    default:
      return state;
  }
};
