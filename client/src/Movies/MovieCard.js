import React from 'react';
const MovieCard = props => {
  return(
      <div className={'movie-card'}>
        <h2>{props.movie.title}</h2>
        <em className={'movie-director'}>{props.movie.director}</em>
        <p>{props.movie.metascore}</p>
        <h3>Actors</h3>
        {props.movie.stars.map(actor => <p>{actor}</p>)}
      </div>
      );
};

export default MovieCard;
