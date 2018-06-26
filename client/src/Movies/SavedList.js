import React from 'react';
import { NavLink } from 'react-router-dom';

const SavedList = props => {
  const handleHomeClick = () => {
    props.history.push('/');
  };

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span key={movie.id} className="saved-movie">
          <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
        </span>
      ))}
      <div className="home-button" onClick={handleHomeClick}>
        Home
      </div>
    </div>
  );
};
export default SavedList;
