import React from 'react';

const MovieCard = ({movie}) => {
  const {title,director,metascore,stars,id,poster} = movie;
  return(
    <div className="movie-card">
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
      <img src={poster} alt="Movie Poster" />
    </div>

  );
};

export default MovieCard;
