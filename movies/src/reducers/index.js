import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import movieByIDReducer from './movieByIDReducer';
import addMoviesReducer from './addMoviesReducer';

const rootReducer = combineReducers({
    moviesArray: moviesReducer,
    movie: movieByIDReducer,
    movieInput: addMoviesReducer,
});

export default rootReducer;
