import { combineReducers } from 'redux';
import { FETCH_MOVIES } from '../Actions';
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

const rootReducer = combineReducers({
    movies: moviesReducer
});

export default rootReducer;