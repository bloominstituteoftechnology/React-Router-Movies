import React from 'react';
import {Route, Link} from 'react-router-dom';
import MovieList from './MovieList';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div className="home-button">  
      <Link to="/">Home</Link>
    </div>
  </div>
);

export default SavedList;
