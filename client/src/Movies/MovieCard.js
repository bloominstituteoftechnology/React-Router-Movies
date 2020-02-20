import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = props => {
  props.movies.map(movie => (
    <Link to={`/movies/${movie.id}`}>
      {movie.title}
    </Link>
  ))
};

export default MovieCard;
