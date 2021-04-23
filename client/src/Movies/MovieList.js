import React from 'react';
import { Link } from 'react-router-dom';

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
  const { title, director, metascore, id } = props.movie;

  return (
    <Link
      to={`/movies/${id}`}
      style={{ color: 'inherit', textDecoration: 'inherit' }}
    >
      <MovieCard
        title={title}
        director={director}
        metascore={metascore}
        stars={null}
      />
    </Link>
  );
}
