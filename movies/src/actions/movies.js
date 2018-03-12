import axios from 'axios'

const host = 'http://localhost:3030'

export const ADD_MOVIE = 'ADD_MOVIE'
export const addMovie = (movie) => {
  axios.post(`${host}/new-movie`, movie)
  return {
    type: ADD_MOVIE,
    payload: {movie}
  }
}

export const UPDATE_MOVIE = 'UPDATE_MOVIE'
export const updateMovie = (id, movie) => {
  axios.put(`${host}/update-movie`, {id, movie})
  return {
    type: UPDATE_MOVIE,
    payload: {id, movie}
  }
}

export const DELETE_MOVIE = 'DELETE_MOVIE'
export const deleteMovie = (id) => {
  axios.delete(`${host}/delete-movie`, {id})
  return {
    type: DELETE_MOVIE,
    paylod: {id}
  }
}

export const GET_MOVIE = 'GET_MOVIE'
export const getMovie = (id) => {
  const promise = axios.get(`${host}/movies/${id}`)
  return {
    type: GET_MOVIE,
    payload: promise
  }
}

export const GET_ALL_MOVIES = 'GET_ALL_MOVIES'
export const getAllMovies = () => {
  const promise = axios.get(`${host}/movies`)
  return {
    type: GET_ALL_MOVIES,
    payload: promise
  }
}

