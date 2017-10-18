import { combineReducers } from 'redux';
import { moviesReducer, moviesIdReducer } from './moviesReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  moviesId: moviesIdReducer,
})

export default rootReducer;
