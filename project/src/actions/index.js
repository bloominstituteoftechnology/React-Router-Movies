import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';

export const ADD_MOVIES = 'ADD_MOVIES';

export const SELECTED_MOVIE = 'SELECTED_MOVIE';

export const getMovies = () => {
  const promise = axios.get('http://localhost:5000/movies');
  return {
    type: GET_MOVIES,
    payload: promise
  };
};

export const selectMovie = (id) => {
  const promise = axios.get(`http://localhost:5000/movies/${id}`);
  return {
    type: SELECTED_MOVIE,
    payload: promise
  };
};

export const addMovies = (newMovie) => {
  const promise = axios.post('http://localhost:5000/new-movie', newMovie)
  return {
    type: ADD_MOVIES,
    payload: promise
  };
};