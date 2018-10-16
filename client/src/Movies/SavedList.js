import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class SavedList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="saved-list">
				<h3>Saved Movies:</h3>
				{this.props.list.map((movie) => (
					<NavLink to={`/movies/${movie.id}`}>
						<span key={movie.id} className="saved-movie" onClick={this.props.removeFromList}>
							{movie.title}
						</span>
					</NavLink>
				))}
				<NavLink to="/" className="home-button">
					Home
				</NavLink>
			</div>
		);
	}
}
