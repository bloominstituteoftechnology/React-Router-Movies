import React from 'react';

const MovieCard = props => {
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        {/* this displays the title of the movie inside the card component */}
        <h2>{props.title}</h2>
        <div className="movie-director">
          {/* directors name displays with this here */}
          Director: <em>{props.director}</em>
        </div>
        <div className="movie-metascore">
          {/* displays the score in the component card  */}
          Metascore: <strong>{props.metascore}</strong>
        </div>
        <h3>Actors</h3>
        {/* displays list of actors under Actors  */}
        {props.stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      {/* save button is here  */}
      <div className="save-button" onClick={props.saveMovie}>Save</div>
    </div>
  );
};

export default MovieCard;