import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const MovieCard = props => {
  const movie = props.movie;
  return(
    <div className="movie-card">
    <Link to={`/movies/${props.movie.id}`}>
      <h2>{movie.title}</h2>
    </Link>
      <div className="movie-director">
        Director: {movie.director};
      </div>
      <div className="movie-metascore">
        Metascore: {movie.metascore};
      </div>
      <h2>Actors</h2>
      {movie.stars.map(star => (
        <div key={star} className="movie-star">
          {star};
        </div>
      ))}
    </div>
  );
};

export default MovieCard;

