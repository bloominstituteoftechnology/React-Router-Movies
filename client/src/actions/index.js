import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES'; // exports to reducers
export const SELECT_MOVIE = 'SELECT_MOVIE'; // exports to reducers

export const getMovies = () => {
  const apiUrl = 'http://localhost:5000/api/movies';
  const getMovies = axios.get(apiUrl);
  return {
      type: GET_MOVIES,
      payload: getMovies
  };
};

export const selectMovie = (id) => {
  const apiUrl = `http://localhost:5000/api/movies/${id}`;
  const selectMovie = axios.get(apiUrl);
  return {
      type: SELECT_MOVIE,
      payload: selectMovie
  }; 
};

