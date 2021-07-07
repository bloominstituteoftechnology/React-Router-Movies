import React from 'react';
import { Link } from 'react-router-dom';  
export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore, id } = props.movie;

  const style = {
    color: 'black', 
    textDecoration: 'none', 
  }

  return (
    <div className="movie-card">
      <h2>
        <Link style={style} to={`/movie/${id}`}>{title}</Link>
      </h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}