import { combineReducers } from 'redux';
import { MoviesReducer, MovieReducer} from './movies'

const reducers = combineReducers({
    movie: MovieReducer,
    movies: MoviesReducer
})

export default reducers;