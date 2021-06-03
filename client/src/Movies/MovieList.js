import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import MovieCard from './MovieCard';

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
       <Link key={movie.id} to={`/movies/${movie.id}`} > 
        <MovieDetails  movie={movie} />
        </Link>
        
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, id, metascore } = props.movie;
  const history = useHistory();
  return (
    <div className="movie-card" onClick={() => history.push(`/movies/${id}`)} >
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
