import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieList(props) {
  const { movies } = props;

  return (
    <div className="movie-list">
      {movies.map(movie => {return (
        <Link to={`/movies/${movie.id}`} style={{ textDecoration: 'none', color: 'black' }} key={movie.id}>
          <MovieDetails key={movie.id} movie={movie} />
        </Link>
      )})}
    </div>
  );
}

function MovieDetails(props) {
  const { movie } = props;

  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <div className="movie-director">
        Director: <em>{movie.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{movie.metascore}</strong>
      </div>
    </div>
  );
}
