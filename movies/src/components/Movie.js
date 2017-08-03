//movie
import React from 'react';

const Movie = ({ movie }) => {
  return (
    console.log(movie),
    <li key={movie.id}>
      <p>{`Movie ${movie.id}`}</p>
      <p>{`Title: ${movie.title}`}</p>
      <p>{`Director: ${movie.director}`}</p>
      <p>{`Metascore: ${movie.metascore}`}</p>
      <p>{`Stars: ${movie.stars}`}</p>
    </li>
  );
};

export default Movie;
