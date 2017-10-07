//import React from 'react';
import { combineReducers } from 'redux';
import { DISPLAY_MOVIES, DISPLAY_MOVIE} from '../actions';

const allMoviesReducer = (movies=[], action) => {
    switch (action.type){
        case DISPLAY_MOVIES:
        return action.payload.data;
        default:
            return movies;
    }
};

const singleMovieReducer = (movie=[], action) => {
    switch(action.type){
        case DISPLAY_MOVIE:
        return action.payload.data;
        default:
        return movie;
    }
};

const root = combineReducers({
    movies: allMoviesReducer,
    movie: singleMovieReducer

});

export default root;