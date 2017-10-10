import axios from 'axios';

export const getMovies = (movies) => {
  // axios.get(`${URL}/movies`).then(response=> console.log(response.data));
  console.log('logging out movies in getmovies', movies);
  return {
    type: 'GET_MOVIES',
    movies
  };
};
// takes in an object that contains movie info
export const getSingleMovie = (movie) => {
  return {
    type: 'GET_SINGLE_MOVIE',
    movie
  }
};