import axios from 'axios';
export const GET_MOVIES = 'GET_MOVIES';
export const SET_MOVIE = 'SET_MOVIE';


export const getMovies = ()=> {
    const api_url = 'http://localhost:5000/api/movies';
    const movieRequest = axios.get(api_url);
    return {
        type: GET_MOVIES,
        payload: movieRequest,
    }
}

export const setMovie = (id)=> {
    const api_url = `http://localhost:5000/api/movies/${id}`;
    const movieRequest = axios.get(api_url);
    return {
        type: SET_MOVIE,
        payload: movieRequest,
    }
}