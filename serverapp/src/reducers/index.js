import { combineReducers } from 'redux';
import movies_reducer from './movies_reducer';
import movie_reducer from './movie_reducer';

const rootReducer = combineReducers({
  movies: movies_reducer,
  movie: movie_reducer,
});

export default rootReducer;