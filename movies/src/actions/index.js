import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_SELECT_MOVIE = 'GET_SELECT_MOVIE';
export const ADD_NEW_MOVIE = 'ADD_NEW_MOVIE';

export const getAllMovies = () => {
  const promise = axios.get('http://localhost:5000/api/movies');
  return {
    type: GET_MOVIES,
    payload: promise
  };
};

export const getSelectMovie = (id) => {
  const promise  = axios.get(`http://localhost:5000/api/movies/${id}`);
  return {
    type: GET_SELECT_MOVIE,
    payload: promise
  };
};

export const addNewMovie = (movie) => {
  const promise  = axios.post('http://localhost:5000/api/movies', movie);
  console.log(promise);
  return {
    type: ADD_NEW_MOVIE,
    payload: promise
  };
};