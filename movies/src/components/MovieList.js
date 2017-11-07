import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMovies } from '../actions/actions';

class MovieList extends React.Component {
	render() {
		console.log(this.props.movies);

		return (
			<div className="movies">
				<h1>List of My movies</h1>
				<ul>
					{this.props.movies.map(movie => {
						return (
							<li key={movie.id}>
                                <Link to={`/movies/${movie.id}`}>
                                    {movie.title}
                                </Link>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}

	componentDidMount() {
		this.props.getMovies();
	}
}

const mapStateToProps = state => {
	// app state
	return {
		movies: state.movies,
	};
};

export default connect(mapStateToProps, { getMovies: fetchMovies })(MovieList);
