import { movies } from '../actions';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ params: { movieId } }) => {
    const movie = movies.find(
      movie => movie.id === parseInt(movieId, 10)
    );
  }
  
  Movie.propTypes = {
  params: PropTypes.shape({
    movieId: PropTypes.string.isRequired,
  }).isRequired,
};

export default Movie;