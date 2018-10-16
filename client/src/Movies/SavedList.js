import React, { Component } from 'react';
import { Route } from 'react-router-dom';

export default class SavedList extends Component {
	constructor(props) {
		super(props);
	}

	goHome() {
		return <Route exact path="/" component={SavedList} />;
	}

	render() {
		return (
			<div className="saved-list">
				<h3>Saved Movies:</h3>
				{this.props.list.map((movie) => <span className="saved-movie">{movie.title}</span>)}
				<div className="home-button">Home</div>
			</div>
		);
	}
}
