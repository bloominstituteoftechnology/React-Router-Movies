import { SELECT_MOVIE} from "../actions";

export default (selectMovie = null, action) => {
  switch (action.type) {
      case SELECT_MOVIE:
        return action.payload.data;
      default:
        return selectMovie;
  }
};