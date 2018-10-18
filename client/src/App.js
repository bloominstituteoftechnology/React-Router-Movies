import React, { Component } from 'react';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { Route } from 'react-router-dom';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			savedList: []
		};
	}


 addToSavedList = (movie, id) => {
    const savedList = this.state.savedList.slice();
    if (savedList.includes(movie)) {
      alert('Movie is already saved');
    } else {
      savedList.push(movie);
      this.setState({ savedList });
    }
  };
  

	render() {
		return (
			<div>
				<SavedList list={this.state.savedList} />
				<div>
					<Route exact path="/movies" component={MovieList} />
					<Route
						path="/movies/:id"
						render={props => (
							<Movie
								{...props}
								savedList={this.state.savedList}
								addToSavedList={this.addToSavedList}
							/>
						)}
					/>
				</div>
			</div>
		);
	}
}
