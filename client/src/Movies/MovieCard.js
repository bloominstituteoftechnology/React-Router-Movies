import React from 'react';
import { useHistory } from 'react-router-dom'

function MovieCard (props) {
  let history = useHistory();
  const { id, title, director, metascore } = props.movie;

  function clickCard(event) {
    event.preventDefault();
    history.push(`/movie/${id}`);
  }

  return (
    <div className="movie-card" onClick={clickCard}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  )
}

export {
  MovieCard
}
