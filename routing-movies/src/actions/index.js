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
  // const request = axios.get('http://localhost:5000/movies/:id', {params: {id: 1}});
  return {
    type: 'GET_ID',
    payload: request,
  }
};

