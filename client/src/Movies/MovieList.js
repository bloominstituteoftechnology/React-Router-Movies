import React from 'react';
import { useHistory } from 'react-router-dom';
 
export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} id={movie.id} movie={movie}/>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const history = useHistory();
  const { title, director, metascore } = props.movie;
  return (
    <div onClick={()=>history.push(`/movies/${props.id}`)} className="movie-card">
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
