import React from 'react';
import MovieCard from './MovieCard';

export default function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { id } = movie;

  const showMovieDetail = () => {
    window.location.href = `/movies/${id}`;
  };

  return (
    <div onClick={showMovieDetail}>
      <MovieCard movie={movie} />
    </div>
  );
}
