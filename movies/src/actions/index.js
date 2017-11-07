import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIEITEM = 'GET_MOVIEITEM';

export const getMovies = () => {
    const promise = axios.get('http://localhost:5000/movies');
    return {
        type: GET_MOVIES,
        payload: promise
    };
};

export const getMovieItem = (id) => {
    const promise = axios.get('http://localhost:5000/movies/${id}');
    return {
        type: GET_MOVIEITEM,
        payload: promise
    };
};