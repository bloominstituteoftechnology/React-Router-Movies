import axios from "axios";

export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE_ID = "GET_MOVIE_ID";

export const getMovies = () => {
  const apiUrl = "http://localhost:5000/api/movies";
  const moviesRequest = axios.get(apiUrl);
  return {
    type: GET_MOVIES,
    payload: moviesRequest
  };
};

export const getMovieID = movieData => {
  const promise = axios.post("http://localhost:5000/api/movies/:id", movieData);
  return {
    type: GET_MOVIE_ID,
    payload: promise
  };
};
