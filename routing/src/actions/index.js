import axios from 'axios';

export const GET_ALL_MOVIES = 'GET_ALL_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';
export const ADD_MOVIE = 'ADD_MOVIE';

export const getAllMovies = () => {
  return {
    type: GET_ALL_MOVIES,
    payload: axios.get('http://localhost:5000/movies')
  };
};

export const getMovie = (id) => {
  return {
    type: GET_MOVIE,
    payload: axios.get(`http://localhost:5000/movies/${id}`)
  };
};

export const addMovie = (movie) => {
  return {
    type: ADD_MOVIE,
    payload: axios.post('http://localhost:5000/new-movie', movie)
  };
}
