import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails myKey={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const key = props.myKey
  const { title, director, metascore } = props.movie;

  const history = useHistory()

  const selectMovie = () => {
    history.push(`/movies/${key}`)
  }

  return (
    <div className="movie-card" onClick={() => selectMovie(key)}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
