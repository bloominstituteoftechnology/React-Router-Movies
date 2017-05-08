import { ADD_MOVIE } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return action.payload;
    default:
      return state;
  }
};
