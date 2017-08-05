import axios from 'axios';

export const getMovies = () => {
  const request = axios.get('http://localhost:5000/movies');
  return {
    type: 'GET_MOVIES',
    payload: request,
  }
};

export const getId = (id) => {
  const request = axios.get(`http://localhost:5000/movies/${id}`);
  return {
    type: 'GET_ID',
    payload: request,
  }
};
