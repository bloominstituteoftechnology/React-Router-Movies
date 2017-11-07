import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../actions';

class MovieList extends Component {
    componentDidMount() {
        this.props.getMovies();
    }

    render() {
        return(
            <ul>
            {this.props.movies.map((movie) => {
                return(
                    <li key = {movie.id}> 
                        <p> Title: {movie.title} </p> 
                        <p> Director: {movie.director} </p>
                        <p> MetaScore: {movie.metascore} </p>
                        <p> Stars: {movie.stars} </p>
                    </li>
                );
            })}
        </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    };
}

export default connect(mapStateToProps, { getMovies })(MovieList);