import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';
export const ADD_MOVIE = 'ADD_MOVIE';
export const UPDATE_MOVIE = 'UPDATE_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';

export const getMovies = () => {
    const promise = axios.get('http://localhost:5000/movies'); 
  return {
    type: GET_MOVIES,
    payload: promise
  };
};
export const getMovie = (id) => {
  //console.log('getMovie action  id:',id)
    const promise = axios.get('http://localhost:5000/movies/'+id.substring(1))
    return {
        type: GET_MOVIE,
        payload: promise
      };
};

export const addMovie = movie => {
    const promise = axios.post('http://localhost:5000/new-movie',movie)
  return {
    type: ADD_MOVIE,
    payload: promise
  };
};

export const updateMovie = movie => {
    const promise = axios.put('http://localhost:5000/movies',movie) 

    return {
        type: UPDATE_MOVIE,
        payload: promise
      }
}

export const deleteMovie = id => {
    const promise = axios.delete('http://localhost:5000/movies',   {
        data: { id }
    })
    return {
        type: DELETE_MOVIE,
        payload: promise
      }
}