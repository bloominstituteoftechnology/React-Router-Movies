import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class MovieCard extends Component {
	constructor(props) {
		super(props);
	}
		render() {
		console.log(this.props);
		return (
			<div className="save-wrapper">
				<div className="movie-card">
					<Link to={`/movies/${this.props.movie.id}`}>
						<h2>{this.props.movie.title}</h2>
						<div className="movie-director">
							Director: <em>{this.props.movie.director}</em>
						</div>
						<div className="movie-metascore">
							Metascore: <strong>{this.props.movie.metascore}</strong>
						</div>
						<h3>Actors</h3>            
						{this.props.movie.stars.map(star => (
						<div key={star} className="movie-star">
            	{star}
						</div>
					))}
					</Link>
				</div>
				<button onClick = {this.
				props.addToSavedList} className="save-button">Save</button>
			</div>
		);
	}
}
