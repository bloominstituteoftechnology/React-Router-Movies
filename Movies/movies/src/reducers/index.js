import { combineReducers } from 'redux';
import MoviesReducer from './LoadMovie';

const rootReducer = combineReducers({
  activeMovie: MoviesReducer,
});

export default rootReducer;
