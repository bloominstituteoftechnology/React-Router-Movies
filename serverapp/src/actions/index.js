import axios from 'axios';


export const showMovies = () => {
    const promise = axios.get('http://localhost:3000/movies');
    return {
        type: MOVIES,
        payload: promise
    };
};

export const showMovie = (movieId) => {
    const promise = axios.get (`http://localhost:3000/movies/${movieid}`);
    return {
        type: MOVIE,
        payload: promise,
    };
};