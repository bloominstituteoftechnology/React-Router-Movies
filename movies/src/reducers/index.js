import {GET_MOVIES, PICK_MOVIE} from '../actions'; 
import {combineReducers} from 'redux';

const moviesReducer = (movies = [], action) => {
    switch (action.type) {
        case GET_MOVIES:
            return action.payload.data;
        default:
            return movies;
    }
}

const pickedMovieReducer = (pickedMovie= {}, action) => {
    switch (action.type) {
        case PICK_MOVIE:
            return action.payload.data;
        default:
            return pickedMovie;
    }
};

 const rootReducer = combineReducers({
    movies: moviesReducer,
    pickedMovie: pickedMovieReducer
});

export default rootReducer;