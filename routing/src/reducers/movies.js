import { FETCH_MOVIES, FETCH_MOVIE, ADD_MOVIE } from '../actions/types'


export const MoviesReducer = (movies = [], action) => {
    switch(action.type) {
        case ADD_MOVIE: {
            const movies = action.payload.data;
            return movies;
        }
        case FETCH_MOVIES: {
            const movies = action.payload.data;
            return movies;
        }
        default: 
        return movies;
    }
}

export const MovieReducer = (movie = {}, action) => {
    switch(action.type) {
        case FETCH_MOVIE: {
            const movie = action.payload.data;
            return movie;
        }
        default:
        return movie;
    }

}