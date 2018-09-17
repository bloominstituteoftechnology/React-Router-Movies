import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const movieCard = {
	backgroundColor: '#fff',
	border: '0',
	boxShadow: '0 -1px 0 #e0e0e0',
	WebKitBoxShadow: '0 0 2px rgba(0, 0, 0, 0.12)',
	MozBoxShadow: '0 2px 4px rgba(0, 0, 0, 0.24)',
	padding: '1rem',
	cursor: 'pointer',
	position: 'relative',
	margin: '1rem auto',
};
export default class MovieList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
		};
	}

	componentDidMount() {
		axios
			.get('http://localhost:5000/api/movies')
			.then((response) => {
				this.setState(() => ({ movies: response.data }));
			})
			.catch((error) => {
				console.error('Server Error', error);
			});
	}

	render() {
		return (
			<div className="movie-list">
				{this.state.movies.map((movie) => (
					<MovieDetails key={movie.id} movie={movie} />
				))}
			</div>
		);
	}
}

function MovieDetails({ movie }) {
	const { title, director, metascore, stars } = movie;
	return (
		<Link to={`/movies/${movie.id}`} style={movieCard}>
			<h2>{title}</h2>
			<div className="movie-director">
				Director: <em>{director}</em>
			</div>
			<div className="movie-metascore">
				Metascore: <strong>{metascore}</strong>
			</div>
			<h3>Actors</h3>

			{stars.map((star) => (
				<div key={star} className="movie-star">
					{star}
				</div>
			))}
		</Link>
	);
}
