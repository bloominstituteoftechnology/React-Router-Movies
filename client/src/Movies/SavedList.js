import React from 'react';
import { Link } from 'react-router-dom';

export default function SavedList(props) {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map((movie) => (
        <Link
          key={movie.id}
          to={`/movies/${movie.id}`}
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <span className="saved-movie">{movie.title}</span>
        </Link>
      ))}
      <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <div className="home-button">Home</div>
      </Link>
    </div>
  );
}
