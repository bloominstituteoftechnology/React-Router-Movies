import { SELECT_MOVIE } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case SELECT_MOVIE:
      console.log(action);
      console.log(action.payload.data);
      return action.payload;
    default:
      return state;
  }
}
