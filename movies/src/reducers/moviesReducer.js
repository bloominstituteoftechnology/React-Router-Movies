const moviesReducer = (movies = [], action) => {
  switch (action.type) {
    case 'GET_MOVIES':
      return action.payload.data;
    default:
      return movies;

    }
};

export default moviesReducer;
