import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';

export const getMovies = () => {
  const movies = axios.get('http://localhost:5000/movies');
  return {
    type: GET_MOVIES,
    payload: movies
  };
};

export const getMovie = (index) => {
  const movie = axios.get(`http://localhost:5000/movies/${index}`)
  return {
    type: GET_MOVIE,
    payload: movie
  };
};