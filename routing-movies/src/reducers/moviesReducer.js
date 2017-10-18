export const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_MOVIES':
      return action.payload.data;
    default:
    return state;
  }
}

export const moviesIdReducer = (movie = null, action) => {
  switch (action.type) {
    case 'GET_ID':
      return action.payload.data;
    default:
    return movie;
  }
}
