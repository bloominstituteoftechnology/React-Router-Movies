import React from 'react';

const MovieCard = props => {
  return(
    <div>
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

export default MovieCard;
