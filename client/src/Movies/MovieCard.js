import React from 'react';

const MovieCard = ({movie}) => {
  return (
    <div className='movie-card'>
      <h2>{movie.title}</h2>
      <div className='movie-director'>
        Director: <em>{movie.director}</em>
      </div>
      <div className='movie-metascore'>
        Metascore: <strong>{movie.metascore}</strong>
      </div>
      <h3>Actors</h3>
      {movie.stars.map(star => (
        <div className='movie-star' key={star}>
          {star}
        </div>
      ))}
    </div>
  )
};

export default MovieCard;