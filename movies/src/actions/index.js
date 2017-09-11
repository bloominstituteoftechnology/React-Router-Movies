import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';
export const PICK_MOVIE = 'PICK_MOVIE';

export const getMovies = () => {
    const promise = axios.get('http://localhost:5000/movies');
    return ({
        type: GET_MOVIES,
        payload: promise,
    });
};

export const pickMovie = (id) => {
    const promise = axios.get(`http://localhost:5000/movies/${id}`);
    return({
        type: PICK_MOVIE,
        payload: promise,
    });
};
