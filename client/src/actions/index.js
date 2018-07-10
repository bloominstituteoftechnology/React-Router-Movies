export const SET_MOVIE = 'SET_MOVIE';
export const SET_MOVIES = 'SET_MOVIES';

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