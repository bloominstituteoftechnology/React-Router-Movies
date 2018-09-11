import React from 'react';

const MovieCard = (props) => {
  const { title, director, metascore, stars } = props.movie;
  return (
    <div className="save-wrapper">
      <div className="movie-card" onClick={ () => props.match && props.match.url === '/' ? props.history.push(`/movies/${props.movie.id}`) : null } >
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
      <div className="save-button" onClick={() => props.addToSavedList(props.movie) }>Save</div>
    </div>
  );
};

export default MovieCard;
