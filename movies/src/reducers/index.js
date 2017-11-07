import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import movieItemReducer from './movieItemReducer'
const rootReducer = combineReducers({
    movies: movieReducer,
    movie: movieItemReducer
});

export default rootReducer;