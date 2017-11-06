import axios from 'axios';

export const GET_MOVIES = "GET_MOVIES";
export const ADD_MOVIE = "ADD_MOVIE";
export const GET_MOVIE = "GET_MOVIE";

export const getMovies = () => {
	const movies = axios.get('http://localhost:5000/movies');
	return {
		type: GET_MOVIES,
		payload: movies,
	};
}

export const getMovie = (id) => {
	const movie = axios.get('http://localhost:5000/movies/' + id);
	return {
		type: GET_MOVIE,
		payload: movie,
	};
}

export const addMovie = (movie) => {
	const movies = axios.post('http://localhost:5000/new-movie', movie);
	return {
		type: ADD_MOVIE,
		payload: movies,
	};
}