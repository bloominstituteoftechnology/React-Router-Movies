import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

export default function SavedList(props) {

  const { path, url} = useRouteMatch();

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <NavLink to="/">
        <div className="home-button">Home</div>
      </NavLink>
    </div>
  );
}
