import React from 'react';

import { Link, BrowserRouter as Route, Router } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div className = "home-button">
    <Link to = '/' className="home-button">Home</Link>
    </div>
    <Link to="/movies/"><div className="home-button">Movies</div></Link>
  </div>
);

export default SavedList;
