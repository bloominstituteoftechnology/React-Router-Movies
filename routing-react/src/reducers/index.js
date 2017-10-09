import { GET_MOVIES, NEW_MOVIE, GET_MOVIE } from '../actions';

const moviesReducer = (movies = [], action) => {
    switch(action.type) {
        case GET_MOVIES:
            return action.payload.data;
        case GET_MOVIE:
        console.log(action.payload.data);
            return action.payload.data;
        case NEW_MOVIE:
            return action.payload.data;
        default:
            return movies;
    }
};


export default moviesReducer;