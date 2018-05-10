import React from 'react';
import './Movies.css';
import './Movieposter';

const MovieCard = ({ movie }) => {
  const { title, director, metascore, stars, id } = movie;
  return (
    
    <div className="cardstyle">
    <div className="movie-card">
      <div className="cardtitle">
      <h2>{title}</h2>
      </div>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <div className="movie-actors">
      <h3>Actors</h3>
      </div>
      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
      
      ))}
    </div>

    </div>
  );
};

export default MovieCard;
