import React from 'react';

const MovieCard = props => {
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{props.title}</h2>
        <div className="movie-card-line"></div>
        <div className="movie-director">
          Director: <em>{props.director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{props.metascore}</strong>
        </div>
        <h3>Actors</h3>
        <div className="movie-card-line actor-line"></div> 
        {props.stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      {/* <div className="save-button" onClick={props.saveMovie}>Save</div> */}
      { props.addToSavedList ? <div className="save-button" onClick={props.saveMovie}>Save</div> : null }
    </div>
  );
};

export default MovieCard;