import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import movieByIDReducer from './movieByIDReducer';

const rootReducer = combineReducers({
    moviesArray: moviesReducer,
    movie: movieByIDReducer,
});

export default rootReducer;
