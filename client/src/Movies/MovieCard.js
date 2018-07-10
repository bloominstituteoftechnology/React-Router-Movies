import React from 'react';
import { NavLink } from 'react-router-dom';

const MovieCard = props => {
  return(
    function MovieDetails({ movie }) {
      const { title, director, metascore, stars } = movie;
      return (
        <NavLink to={`/movies/${movie.id}`} className="movie-card">
          <h2>{title}</h2>
          <div className="movie-director">
            Director: <em>{director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{metascore}</strong>
          </div>
          <h3>Actors</h3>
    
          {stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
        </NavLink>
      );
    }
  );
};

export default MovieCard;
