import React from 'react';
import ReactDOM from 'react-dom';

import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';

import App from './App';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

import { GET_MOVIES, GET_MOVIE_DETAILS } from './actions/actions';

const moviesReducer = (movies = [], action) => {
	switch (action.type) {
		case GET_MOVIES:
			return action.payload.data;
		default:
			return movies;
	}
};

const selectedMovieReducer = (selectedMovie = null, action) => {
	console.log('selected movie reducer', action.payload);
	switch (action.type) {
		case GET_MOVIE_DETAILS:
			return action.payload.data;
		default:
			return selectedMovie;
	}
};

const rootReducer = combineReducers({
	movies: moviesReducer,
	selectedMovie: selectedMovieReducer,
});

const configureStore = applyMiddleware(ReduxPromise)(createStore);
const store = configureStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Route exact path="/" component={MovieList} />
				<Route exact path="/movies/:id" component={MovieDetails} />
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
