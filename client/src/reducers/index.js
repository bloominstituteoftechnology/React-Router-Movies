import { combineReducers } from 'redux';
import MovieReducer from './MovieReducer';
import SelectedMovieReducer from './SelectedMovieReducer';

const rootReducer = combineReducers({
    movies: MovieReducer,
    selectedMovie: SelectedMovieReducer
});

export default rootReducer;