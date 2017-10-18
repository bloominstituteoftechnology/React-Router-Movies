import { combineReducers } from 'redux';
import { GET_MOVIES, ADD_MOVIE } from '../actions';


const moviesReducer = (movies = [], action) => {
    switch(action.type) {
        case GET_MOVIES:
            return action.payload.data;
        case ADD_MOVIE:
            return action.payload.data;
        default:
            return movies;
    }
};

export default combineReducers({ movies: moviesReducer });