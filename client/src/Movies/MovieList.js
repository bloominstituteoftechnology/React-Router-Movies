import React from 'react';

// * Step 6 from Guided Project: bring in Link and useRouteMatch hook
import {Link, useRouteMatch } from "react-router-dom";

export default function MovieList(props) {

  // *grab current URL with the hook vv
// const { movies } = props;
// const { url } = useRouteMatch();

  return (
    <div className="movie-list">
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
      <Link to={ `/movies/${props.movie.id}` }>
        
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      </Link>
      
    </div>
  );
}
