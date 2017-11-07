import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIESID = 'GET_MOVIESID';

export const getMovies = () => {
  const moviesEndpoint = axios.get('http://localhost:5000/movies');
  return {
    type: GET_MOVIES,
    payload: moviesEndpoint
  }
}

export const getMoviesId = () => {
  const moviesEndpoint = axios.get('http://localhost:5000/movies/:id');
  return {
    type: GET_MOVIESID,
    payload: moviesEndpoint
  }
}