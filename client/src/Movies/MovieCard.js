import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = props => {
  return (
  <div>
    {MovieList.map(movie => <Link to={`/MovieList/${movie}`} key={movie}>{movie}</Link>)}
  </div>)

};

export default MovieCard;
