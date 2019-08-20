import React from 'react';

import { NavLink, Link } from 'react-router-dom'

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      
      <NavLink to={`/movies/${movie.id}`} className="saved-movie" activeClassName='active-link'>{movie.title}</NavLink>
      ))}
    <div style={{display: 'flex'}}>
      <Link to='/'>
        <div className="home-button" style={{marginRight: '5px'}}>Home</div>
      </Link>
      <div>
        <div onClick={props.clearSavedList} className="home-button">Clear</div>
      </div>
    </div>
  </div>
);

export default SavedList;
