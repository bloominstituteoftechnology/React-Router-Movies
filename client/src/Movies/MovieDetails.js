import React from 'react';
import MovieCard from './MovieCard';

export default function MovieDetails({ movie }) {
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
