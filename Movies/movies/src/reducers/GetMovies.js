import { GET_MOVIES } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case GET_MOVIES:
      return action.payload.data;
    default:
      return state;
  }
};
