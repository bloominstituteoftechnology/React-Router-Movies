import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';

export const getMovies = () => {
    const moviesEndpoint = 'http://localhost:5000/movies';
    const movies = axios.get(moviesEndpoint);
    return {
        type: GET_MOVIES,
        payload: movies,
    };
};

export const GET_MOVIE = 'GET_MOVIE';

export const getMovie = (id) => {
    const movieEndpoint = `http://localhost:5000/movies/${id}`;
    const movie = axios.get(movieEndpoint);
    return {
        type: GET_MOVIE,
        payload: movie
    };
};

export const ADD_MOVIE = 'ADD_MOVIE';

export const addMovie = (movie) => {
    const movieEndpoint = 'http://localhost:5000/new-movie';
    const movies = axios.post(movieEndpoint, movie);
    return {
        type: GET_MOVIES,
        payload: movies
    };
};
