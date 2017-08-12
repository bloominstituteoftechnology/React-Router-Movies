import axios from 'axios';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const SELECTED_MOVIE = 'SELECTED_MOVIE';


export const fetchMovies = () => {
    const promise = axios.get('http://localhost:5000/movies');
    // Add the code for this action
    return {
           type: FETCH_MOVIES,
           payload: promise, // look at reducer
    };
};

export const setSelectedMovie = (id) => {
    const promise = axios.get(`http://localhost:5000/movies/${id}`,{
    params: {
            id
          }
    });
    // Add the code for this action
   
    return {
           type: SELECTED_MOVIE,
           payload: promise, // look at reducer
    };
};