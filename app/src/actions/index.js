import axios from 'axios';
export const DISPLAY_MOVIES = 'DISPLAY_MOVIES';
export const DISPLAY_MOVIE = 'SHOW_MOVIE';


export const displayMovies = () => {
    const data = axios.get('http://localhost:5000/movies');
    return {
        type:DISPLAY_MOVIES,
        payload: data
    };
};

export const displayMovie = (id) => {
    const data = axios.get(`http://localhost:5000/movies/${id}`);
    return {
        type:DISPLAY_MOVIE,
        payload: data
    };
};