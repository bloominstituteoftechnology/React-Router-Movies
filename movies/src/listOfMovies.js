//listOfMovies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from './actions';
import { Link } from 'react-router-dom';

class ListOfMovies extends Component {
  componentDidMount() {
    this.props.getMovies();
  }
  render() {
    return (
      <div>
        {this.props.movies.map(movie => {
          return (
            <Link to={`/ ${movie.id} `} key={movie.id}>
          {movie.title}
        </Link>
      );
    })}
  </div>
  );
 }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

export default connect(mapStateToProps, { getMovies })(ListOfMovies);
