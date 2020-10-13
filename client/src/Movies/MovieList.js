import React from 'react';
import { useHistory } from 'react-router-dom';

export default function MovieList(props) {
  if(props.movies) {
  return (
    <div className="movie-list">
      
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
  } else {
    return (
      <div>Loading...</div>
    )
  }
}

function MovieDetails(props) {
  const { title, director, metascore, id } = props.movie;
  const history = useHistory()
  const movieRoute = () => {
    history.push(`/movies/${id}`)
  }

  return (
    <div onClick={() => {movieRoute()}} className="movie-card">
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
