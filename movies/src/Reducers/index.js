import { combineReducers } from 'redux';
import { FETCH_MOVIES } from '../Actions';
import { SELECTED_MOVIE } from '../Actions';

//import { NEW_FRIENDS } from '../actions/new_friends';

const moviesReducer = (movies = [], action) => {
    switch(action.type) {
        case FETCH_MOVIES:
            return action.payload.data;
            // console.log(action);
            // return [];
        default:
            return movies;
    }
};


const selectedMovieReducer = (movieSelected = {}, action) => {
    //console.log(movieSelected);
    switch(action.type) {
        case SELECTED_MOVIE: 
        //console.log(action.payload.data);
            return action.payload.data;
        default:
            return movieSelected;
    }
};



const rootReducer = combineReducers({
    movies: moviesReducer,
    movieSelected: selectedMovieReducer,
});

export default rootReducer;