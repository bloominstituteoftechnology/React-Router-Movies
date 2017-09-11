import axios from 'axios';

export const GET_MOVIES = "GET_MOVIES";
export const ADD_MOVIE = "ADD_MOVIE";

export const getMovies = () => {
    const promise = axios.get('http://localhost:5000/movies');
    return {
        type: GET_MOVIES,
        payload: promise
    }
}
export const addMovie = (movie) => {
    console.log(movie);
    const promise = axios.post('http://localhost:5000/new-movie', movie);
    return {
        type: ADD_MOVIE,
        payload: promise
    }
}