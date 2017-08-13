import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE_INFO = 'GET_MOVIE_INFO';

export const getMovies = () => {
  const promise = axios.get('http://localhost:5000/movies');
  return {
    type: GET_MOVIES,
    payload: promise
  }
}

export const getMovieInfo = (id) => {
    const promise = axios.get(`http://localhost:5000/movies/${id}`);
    return {
        type: GET_MOVIE_INFO,
        payload: promise
    }
}