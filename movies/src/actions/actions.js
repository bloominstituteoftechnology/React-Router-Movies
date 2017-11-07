import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS';

export const fetchMovies = () => {
	// action creator
	const endpoint = 'http://localhost:5000/movies';
	const getMoviesPromise = axios.get(endpoint);

	console.log('get movies action creator fired...');
	return {
        // an action object
		type: GET_MOVIES, // required
		payload: getMoviesPromise,
	};
};

export const getMovieDetails = (id) => {
    const endpoint = `http://localhost:5000/movies/${id}`;
	const getMovieDetailsPromise = axios.get(endpoint);
    
    console.log('get movie details action creator fired...', id);
	return {
		type: GET_MOVIE_DETAILS,
		payload: getMovieDetailsPromise,
	};
};

