import React from 'react';
import { useHistory } from "react-router-dom";


const MovieList = props => {
  const reactHistroy = useHistory()
  
  const routeToMovie = (id) => {
    reactHistroy.push(`/movies/${id}`)
  }

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} routeToMovie={() => {routeToMovie(movie.id)}}/>
      ))}
    </div>
  );
}


function MovieDetails({ movie, routeToMovie}) {
  const { title, director, metascore } = movie;



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

export default MovieList;
