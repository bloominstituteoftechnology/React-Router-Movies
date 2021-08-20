import React from 'react';
import { Route, Link } from 'react-router-dom';

export default function SavedList(props) {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <Route exact path='/'>
        <Link to='/' style={{textDecoration: 'none', color: 'black'}}>
          <div className="home-button">Home</div>
        </Link>
      </Route>
    </div>
  );
}
