import React from 'react';

const MovieCard = props => {
  return (
    <div>
      {props.movies.map(movie => <Link to={`/movies/${movie}`} key={movie}>{movie}</Link>)}
    </div>)
};

export default MovieCard;
