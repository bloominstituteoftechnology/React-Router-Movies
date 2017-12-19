import React, {Component } from 'react';
import {showMovies } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const Movies = () => {
  componentDidMount() {
    this.props.showMovies();
  }
  render() {
    return (
    <div>
      <h2 className="movies-header">
        Movies
      </h2>
      <div className="movie-listings">
        {this.props.movies.map((movie, i) => {
          return (
          <li key={i}>
              <Link to={`/movies/${movie.id}`}>
              </Link>
          </li>
          );
        })}
       </div>
    </div>
    );
  }
} 
const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps, { showMovies })(Movies);