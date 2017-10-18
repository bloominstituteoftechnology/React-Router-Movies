import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';
export const ADD_MOVIE = 'ADD_MOVIE';

export const getMovies = () => {
  const promise = axios.get('http://localhost:5000/movies');
  return {
    type: GET_MOVIES,
    payload: promise
  };
};

export const getMovie = (id) => {
  const promise = axios.get(`http://localhost:5000/movies/${id}`);
  return {
    type: GET_MOVIE,
    payload: promise
  };
};

export const addMovie  = (movieData) => {
  const promise = axios.post('http://localhost:5000/new-movie', movieData);
  return {
    type: ADD_MOVIE,
    payload: promise
  };
};