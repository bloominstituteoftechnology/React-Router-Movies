import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function SavedList(props) {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      <ul>
        {props.list.map(movie => (
          <NavLink to={`/movies/${movie.id}`}><li className="saved-movie">{movie.title}</li></NavLink>
        ))}
      </ul>
      <Link to={'/'}><div className="home-button">Home</div></Link>
    </div>
  );
}
