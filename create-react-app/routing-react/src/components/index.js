import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { getMovies } from '../actions';

class Home extends Component {

    componentDidMount() {
        this.props.getMovies();
    }
    render() {
        return (
            <ul>
                {this.props.movies.map((movie, i) => {
                    return (
                        <Movie key={i} index={i} movie={movie} />
                    );
                })}
            </ul>
        );
    }
} 

const Movie = ({movie, index}) => {
    return (
        <li>
            <p>{`Movie: ${movie.id}`}</p>
            <p>{`Title: ${movie.title}`}</p>
            <p>{`Director: ${movie.director}`}</p>
            <p>{`Metascore: ${movie.metascore}`}</p>
            <p>{`Stars: ${movie.stars}`}</p>
        </li>
    );
};

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    };
};

export default connect(mapStateToProps, { getMovies })(Home);

