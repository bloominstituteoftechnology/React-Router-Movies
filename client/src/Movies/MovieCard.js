import React from 'react';

const MovieCard = props => {
  const id = props.match.params.id;
  const movie = movies.find(movie => `${movie.id}` === id);
  return(
      <div className="movie-card">
      <h2>{movie.title}</h2>
      <div className="movie-director">
        Director: <em>{movie.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{movie.metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={movie.star} className="movie-star">
          {movie.star}
        </div>))}
      </div>
  );
};


export default MovieCard;
