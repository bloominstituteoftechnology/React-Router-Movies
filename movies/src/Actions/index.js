import axios from 'axios';

export const FETCH_MOVIES = 'FETCH_MOVIES';



export const fetchMovies = () => {
    const promise = axios.get('http://localhost:5000/movies');
    // Add the code for this action
    return {
           type: FETCH_MOVIES,
           payload: promise, // look at reducer
    };
};