export const GET_SELECT_MOVIE = 'GET_SELECT_MOVIE';

export default (selectMovie = null, action) => {
  switch(action.type) {
    case GET_SELECT_MOVIE:
      return action.payload.data;
    default:
      return selectMovie;
  }
};