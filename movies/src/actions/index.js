import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_SELECT_MOVIE = 'GET_SELECT_MOVIE';

export const getAllMovies = () => {
  const promise = axios('http://localhost:5000/api/movies');
  return {
    type: GET_MOVIES,
    payload: promise
  };
};

export const getSelectMovie = (id) => {
  const promise  = axios(`http://localhost:5000/api/movies/${id}`);
  return {
    type: GET_SELECT_MOVIE,
    payload: promise
  };
};