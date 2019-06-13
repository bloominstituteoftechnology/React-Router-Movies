import React from "react";
import { Link } from 'react-router-dom';

export const MovieCard = props => {
  console.log(props);
  
  return (
    <div className="movie-card">
      <button className = "save-button" onClick={() => props.saveMovie(props.movie.title)}>Save Me!</button>
      <Link to={`/movies/${props.movie.id}`} key={props.movie.id}>
              <h2>{props.movie.title}</h2>
      </Link>
      <div className="movie-director">
        Director: <em>{props.movie.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{props.movie.metascore}</strong>
      </div>
      <h3>Actors</h3>
      
      {props.movie.stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  )
};

