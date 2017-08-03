// reducers

import { combineReducers } from 'redux';
import { GET_MOVIES, GET_MOVIES_BY_ID } from '../actions';

const moviesReducer = (movies = [], action) => {
  switch(action.type) {
    case GET_MOVIES:
      return action.payload.data;
    case GET_MOVIES_BY_ID:
      return action.payload.data;
    default:
      return movies;
  }
};

const rootReducer = combineReducers({
  movies: moviesReducer
});

export default rootReducer;
