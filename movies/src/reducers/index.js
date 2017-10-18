import { combineReducers } from 'redux';
import { GET_MOVIES, CHOOSE_MOVIE } from '../actions';


const moviesReducer = (movies = [], action) => {
    switch(action.type) {
        case GET_MOVIES:
            return action.payload.data;
        default: 
            return movies;
    }
}

const chooseReducer = (movie = null, action) => {
    
    switch(action.type) {
        case CHOOSE_MOVIE:
            return action.payload.data;
        default: 
            return movie;
    }
}

const rootReducer = combineReducers({
    movies: moviesReducer,
    movie: chooseReducer
});

export default rootReducer;