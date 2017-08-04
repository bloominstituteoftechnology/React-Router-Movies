// actions

import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIES_BY_ID = 'GET_MOVIES_BY_ID'; 

export const getMovies = () => {
  const promise = axios.get(`http://localhost:5000/movies`);
  return {
    type: GET_MOVIES,
    payload: promise
  };
};

export const getMoviesById = (id) => {
  const promise = axios.get(`http://localhost:5000/movies/${id}`);
    return {
      type: GET_MOVIES_BY_ID,
      payload: promise
    };
};
