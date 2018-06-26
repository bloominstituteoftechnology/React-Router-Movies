import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const SavedList = props => {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink
        activeClassName="is-selected" to={`/movies/${movie.id}`}>
          <span key={`save-${Math.random()}`} className="saved-movie">{movie.title}</span>
        </NavLink>
      ))}
      <Link to="/">
        <div className="home-button">Home</div>
      </Link>
    </div>
  );
};

export default SavedList;