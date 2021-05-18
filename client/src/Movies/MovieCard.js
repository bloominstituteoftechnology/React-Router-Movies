import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieCard (props) {
  const { movies } = props;
  
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
