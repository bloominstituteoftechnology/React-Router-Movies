import { combineReducers } from 'redux';
import { GET_MOVIES } from '../actions';
import { GET_MOVIESID } from '../actions';

const moviesReducer = (movies = [], action) => {
  switch(action.type) {
    case GET_MOVIES:
        return action.payload.data;
    case GET_MOVIESID:
        return action.payload.data;
    default:
        return movies;
  }
};

const rootReducer = combineReducers({
    movies: moviesReducer
});

export default rootReducer;