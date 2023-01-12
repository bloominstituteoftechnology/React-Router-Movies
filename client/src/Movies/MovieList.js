import React from 'react';
import MovieCard from './MovieCard';

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { id } = props.movie;

  const showMovieDetail = () => {
    window.location.href = `/movies/${id}`;
  };

  return (
    <div onClick={showMovieDetail}>
      <MovieCard movie={props.movie} />
    </div>
  );
}
