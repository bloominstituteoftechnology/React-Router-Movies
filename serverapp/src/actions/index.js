import axios from 'axios';
import { MOVIES, MOVIE } from '../constants';


export  const showMovies = () => {
    const promise = axios.get('http://localhost:5000/movies');
    return {
        type: MOVIES,
        payload: promise
    };
};

export  const showMovie = (movieId) => {
    const promise = axios.get (`http://localhost:5000/movies/${movieId}`);
    return {
        type: MOVIE,
        payload: promise,
    };
};