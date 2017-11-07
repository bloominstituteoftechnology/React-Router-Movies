import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMovies, getMovieDetails } from '../actions/actions';

class MovieDetails extends React.Component {
	render() {
		const movieTitle = 'Movie Title';

		console.log('props', this.props);

		if (!this.props.movie) {
			return <h2>Loading Movie...</h2>;
		} else {
			return (
				<div className="movie">
					<h1>Details for {this.props.movie.title}</h1>
				</div>
			);
		}
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.getMovieDetails(id);
	}
}

const mapStateToProps = state => {
	return {
		movie: state.selectedMovie,
	};
};

export default connect(mapStateToProps, { getMovieDetails })(MovieDetails);
