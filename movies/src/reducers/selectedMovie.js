import { combineReducers } from 'redux';
import { SELECTED_MOVIE } from '../actions';

export const selectedMovie = (movie = {}, action) => {
  switch(action.type) {
    case SELECTED_MOVIE:
        return action.payload.data;
    default:
        return movies;
  }
};