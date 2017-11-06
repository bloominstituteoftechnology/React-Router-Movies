import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../actions';
import Movie from './Movie.js';

class MoviesList extends Component {
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

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
};

export default connect(mapStateToProps, { getMovies })(MoviesList);