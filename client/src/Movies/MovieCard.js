import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const MovieCard = props => {
  const {title, director, metascore, stars} = props.movie;
  return (
    <div className="save-wrapper">
      <NavLink to={`/movies/${props.movie.id}`} className="movie-card-links">
        <div className="movie-card">
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
        </div>
      </NavLink>
      <div
        className="save-button"
        onClick={() => props.addToSavedList(props.movie)}>
        Save
      </div>
    </div>
  );
};

export default MovieCard;
