import axios from 'axios';
// import what we need

export const GET_MOVIES = 'GET_MOVIES';
export const SET_SELECTED_MOVIE = 'SET_SELECTED_MOVIE';
// exporting the type names and making sure it's a string so it can go into an object

export const getMovies = () => {
  // this is the function for our actions
  const promise = axios.get('http://localhost:5000/movies');
  // go here to retrieve this shit - get
  return {
    type: GET_MOVIES,
    payload: promise,
  };
};
// more naming, the payload actually has the info

export const setSelectedMovie = (id) => {
  // id is the specific property on the data - pulling id from the movie object
  const promise = axios.get(`http://localhost:5000/movies/${id}`);
  return {
    type: SET_SELECTED_MOVIE,
    payload: promise,
  };
};

