import React from 'react';
import Reactstrap from 'reactstrap';

const MovieCard = ({movie}) => {
 


  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper" style={{}}>
      <div className="movie-card" style={{background: 'green'}}>
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
      <div className="save-button">Save</div>
    </div>
  );
};

export default MovieCard;


