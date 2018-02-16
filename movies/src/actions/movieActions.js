import axios from 'axios';

export const GET_DATA = 'GET_DATA';

const moviesUrl = 'http://localhost:5000/api/movies';

export const getData = () => {
    const data = axios.get(moviesUrl);
    return {
        type: GET_DATA,
        payload: data
    }
}