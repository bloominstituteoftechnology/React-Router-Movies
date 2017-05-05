import { combineReducers } from 'redux';
import MoviesReducer from './LoadMovie';

const rootReducer = combineReducers({
  movies: MoviesReducer,
});

export default rootReducer;
