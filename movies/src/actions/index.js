// actions index for spa routing react repo project
import axios from 'axios';
export const GET_MOVIES = 'GET_MOVIES';
export const GET_SINGLE_MOVIE = 'GET_SINGLE_MOVIE';
const URL = 'http://localhost:5000/movies';

export const getMovies = () => {
  const movies = axios.get(URL);
    return {
      type: GET_MOVIES,
      payload: movies,
    };
};

export const getSingleMovie = (id) => {
  const singleMovie = axios.get(`${URL}/${id}`);
  return {
    type: GET_SINGLE_MOVIE,
    payload: singleMovie
  };
};
