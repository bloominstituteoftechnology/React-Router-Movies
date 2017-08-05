const addMoviesReducer = (movies = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return action.payload.data;
    default:
      return movies;
  }
};

export default addMoviesReducer;