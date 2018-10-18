import React from 'react';

const MovieCard = props => {
  return(
      <div>
        <div className="movie-card">
          <h2 className="movie-title">{props.movie.title}</h2>
          <div className="movie-director">
            <p>Director: <em>{props.movie.director}</em></p>
          </div>
          <div className="movie-actors">
            <h3>Actors</h3>
            {props.movie.stars.map(star => (
              <div key={star} className="movie-star">
                ⭐️ {star}
              </div>
            ))}
          </div>
          <div className="movie-metascore">
            <p>Metascore: <strong>{props.movie.metascore}</strong></p>
          </div>
      </div>
    </div>
  );
};

export default MovieCard;
