import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			savedList: []
		};
	}

	addToSavedList = (movie) => {
		const savedList = this.state.savedList;
		savedList.push(movie);
		this.setState({ savedList });
	};

	removeFromList = (movie) => {
		const savedList = this.state.savedList;
		const id = movie.id;

		savedList.splice(id);
		this.setState({ savedList });
	};

	render() {
		return (
			<div>
				<SavedList list={this.state.savedList} removeFromList={this.removeFromList} />
				{/* <Route path="/movies/:id" render={(props) => <Movie {...props} movies={MovieList} />} /> */}
				<Route exact path="/" render={(props) => <MovieList {...props} />} />
				<Route
					path="/movies/:id"
					render={(props) => <Movie {...props} addToSavedList={this.addToSavedList} />}
				/>
			</div>
		);
	}
}
