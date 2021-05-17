import React from 'react';
import { MovieCard } from './MovieCard'

function MovieList(props) {
  
  return (
    <div className="movie-list">
      {props.movies && props.movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      {!props.movies && <p>No movies found.</p>} 
    </div>
  );
}

export {
  MovieList
}
