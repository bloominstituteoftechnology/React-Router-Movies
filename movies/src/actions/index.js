import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';
export const CHOOSE_MOVIE = 'CHOOSE_MOVIE';

export const getMovie = (id) => {
    const promise = axios.get(`http://localhost:5000/movies/${id.toString()}`);
    return {
        type: CHOOSE_MOVIE,
        payload: promise
    };
}

export const getMovies = () => {
    const promise = axios.get('http://localhost:5000/movies');
    return {
        type: GET_MOVIES,
        payload: promise
    };

}