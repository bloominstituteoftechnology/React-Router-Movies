export const SET_MOVIE = 'SET_MOVIE';
export const SET_MOVIES = 'SET_MOVIES';
export const SET_SAVED_MOVIES = 'SET_SAVED_MOVIE';

export const setMovie = movie => {
    return {
        type: SET_MOVIE,
        payload: movie
    }
}
export const setMovies = movies => {
    return {
        type: SET_MOVIES,
        payload: movies
    }
}

export const setSavedMovies = movies => {
    return {
        type: SET_SAVED_MOVIES,
        payload: movies
    }
}