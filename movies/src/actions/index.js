import axios from 'axios';
export const GET_MOVIES = 'GET_MOVIES';


export const getMovies = ()=> {
    const api_url = 'http://localhost:5000/api/movies';
    const movieRequest = axios.get(api_url);
    return {
        type: GET_MOVIES,
        payload: movieRequest,
    }
}