import axios from "axios";

export const GET_MOVIES = "GET_MOVIES";

export const getMovies = () => {
  const apiUrl = "http://localhost:5000/api/movies";
  const moviesRequest = axios.get(apiUrl);
  console.log(moviesRequest);
  return {
    type: GET_MOVIES,
    payload: moviesRequest
  };
};
