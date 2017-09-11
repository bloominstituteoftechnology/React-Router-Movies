import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';

export const getMovies = () => {
  const promise = axios.get('http://localhost:5000/movies');
  return {
    type: GET_MOVIES,
    payload: promise
  }  
}