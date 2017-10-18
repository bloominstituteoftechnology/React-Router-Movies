import { GET_MOVIES } from '../actions';

export const moviesReducer = (movies = [], action) => {
  switch (action.type) {
    case GET_MOVIES:
      return action.payload.data;
    default: 
      return movies;
  }
};
