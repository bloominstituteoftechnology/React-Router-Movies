import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../actions';
import { Link } from 'react-router-dom';

class MovieList extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    return (
        <div>
          {this.props.movies.map((movies, i) => {
            return (
              <Link to="MovieItem" params={{ movieItem: i }}>{movies.title}</Link>
            );
          })}
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
};

export default connect(mapStateToProps, { getMovies })(MovieList);
