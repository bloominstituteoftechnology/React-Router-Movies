import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';

export const getMovies = () => {
  const moviesEndpoint = axios.get('http://localhost:5000/movies');
  return {
    type: GET_MOVIES,
    payload: moviesEndpoint
  }
}