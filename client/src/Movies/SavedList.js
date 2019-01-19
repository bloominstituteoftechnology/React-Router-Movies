import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

const SavedList = (props) => {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink activeClassName="saved-active" to={`/movies/${movie.id}`}>
          <span className="saved-movie">{movie.title}</span>
        </NavLink>
      ))}
      <Link to="/" className="home-button">Home</Link>
    </div>
  )
}

export default SavedList;