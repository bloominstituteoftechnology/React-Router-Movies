import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import withMovies from '../Containers/withMovies'
import MovieCard from "./MovieCard";

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: props.data
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState(state => {
            if (!state.movies.length) return {movies: nextProps.data}
        })
    }


    render() {
        return (
            <div className="movie-list">
                {this.state.movies.map(movie => (
                    <MovieDetails key={movie.id} movie={movie}/>
                ))}
            </div>
        );
    }
}

function MovieDetails({movie}) {
    const {id} = movie;

    return (
        <Link to={`/movies/${id}`}>
            <MovieCard movie={movie}/>
        </Link>

    );
}

export default withMovies(MovieList)
