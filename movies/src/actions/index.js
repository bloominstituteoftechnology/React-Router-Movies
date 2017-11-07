import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';
export const SELECTED_MOVIE = 'SELECTED_MOVIE';

export const getMovies = () => {
  const moviesEndpoint = axios.get('http://localhost:5000/movies');
  return {
    type: GET_MOVIES,
    payload: moviesEndpoint
  }
}

export const selectedMovie = () => {
  const moviesEndpoint = axios.get(`http://localhost:5000/movies/${id}`);
  return {
    type: SELECTED_MOVIE,
    payload: moviesEndpoint
  }
}