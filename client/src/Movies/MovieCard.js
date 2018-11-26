import React from 'react';
import { NavLink } from 'react-router-dom';
// import axios from 'axios';

const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;
  // console.log('props from moviecard', props.movie)

  return (
    <NavLink to={`/movies/${props.movie.id}`}>
      <div className="movie-card">
        <h2>{props.movie.title}</h2>
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
    </NavLink>
  );
};

export default MovieCard;
