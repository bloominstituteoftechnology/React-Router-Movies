import { FETCH_MOVIES, FETCH_MOVIE, ADD_MOVIE } from './types'

import axios from 'axios';

const API = (path) => `http://localhost:5000/${path}`
export const fetchMovies = () => {
    const payload = axios.get(API('movies'));
    return {
        type: FETCH_MOVIES,
        payload
    }
}

export const fetchMovie = (id) => {
    const payload = axios.get(API(`movies/${id}`, {
        id
    }));
    return {
        type: FETCH_MOVIE,
        payload
    }
}

export const addMovie = (movie) => {
    const payload = axios.post(API('new-movie'), movie);
    return {
        type: ADD_MOVIE,
        payload
    }
}