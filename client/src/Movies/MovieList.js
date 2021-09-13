import React from 'react';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router';

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
  const history = useHistory();

  const routeToMovie = () => {
    history.push(`/movies/${id}`);
  };


  return (
    
      <div className="movie-card" onClick={routeToMovie}>
      
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
