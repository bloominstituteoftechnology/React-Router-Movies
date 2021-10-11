import React from 'react';
import {NavLink} from 'react-router-dom'


export default function SavedList(props) {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <NavLink className="home-button" to = {`/movies`}>Home</NavLink>
    </div>
  );

}
 