import React from 'react';


const MovieCard = props => {
  console.log('MOVIE CARD ERROR', props)
  return (
    <div className="movie-card">
      <h2> {props.props.title} </h2> 
      <div className="movie-director">
        Director: <em>{props.props.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{props.props.metascore}</strong>
      </div>
      <h3>Actors</h3>

      {props.props.stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  ); 
};

export default MovieCard;
