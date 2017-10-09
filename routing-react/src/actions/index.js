import axios from 'axios';
export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';
export const NEW_MOVIE = 'NEW_MOVIE';

export const getMovies = () => {
    const promise = axios.get('http://localhost:5000/movies');
    return {
        type: 'GET_MOVIES',
        payload: promise
    };
};

export const getMovie = (i) => {
    console.log('get movie ' + i);
    const promise = axios.get(`http://localhost:5000/movies/${i}`);
    return {
        type: 'GET_MOVIE',
        payload: promise
    };
};

export const newMovie = (movie) => {
    const promise = axios.post("http://localhost:5000/new-movie", movie);
    return {
        type: 'NEW_MOVIE',
        payload: promise
    };
};