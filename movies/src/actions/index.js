import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';

export const getMovies = (movie) => {
  const promise = axios.get('http://localhost:5000/movies');
  return {
    type: GET_MOVIES,
    payload: promise
  };
};

export const postFriends = (friend) => {
  const postpromise = axios.post('http://localhost:5000/movies', friend);
       return {
         type: GET_MOVIES,
         payload: postpromise
       };

}
