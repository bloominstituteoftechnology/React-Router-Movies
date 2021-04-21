import React from 'react';
import { useHistory } from 'react-router-dom'

export default function MovieList(props) {
  const history = useHistory()
  const routeToMovie = () => {
    console.log(history);
    history.push('/movies/')
  }
  return (
    <div className="movie-list" onClick={routeToMovie}>
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
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
