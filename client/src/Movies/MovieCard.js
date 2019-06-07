import React from 'react';

const MovieCard = props => {
  const MovieMatch = movies.find( m => props.match.params.id === movie.id);
  console.log(MovieMatch)
  return(
    <h1>{movie.title}</h1>
  );
};

export default MovieCard;
