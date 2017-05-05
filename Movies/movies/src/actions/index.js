import axios from 'axios';

export const SELECT_MOVIE = 'SELECT_MOVIE';
export const GET_MOVIES = 'GET_MOVIES';

export const getMovies = () => {
  const promise = axios.get('http://localhost:5000/movies');
  return {
    type: GET_MOVIES,
    payload: promise,
  };
};

export const selectMovie = (movie) => {
  const promise = axios.get('http://localhost:5000/movies/:id')
  return {
    type: SELECT_MOVIE,
    payload: movie,
  };
};
