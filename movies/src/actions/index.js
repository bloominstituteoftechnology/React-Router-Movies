import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE_BY_ID = 'GET_MOVIE_BY_ID';

export const getMovies = () => {
  const promise = axios.get('http://localhost:5000/movies');
    return {
        type: GET_MOVIES,
        payload: promise
    };
};

export const getMovieByID = (id) => {
  const promise = axios.get(`http://localhost:5000/movies/${id}`);
  return {
    type: GET_MOVIE_BY_ID,
    payload: promise
  };
};
