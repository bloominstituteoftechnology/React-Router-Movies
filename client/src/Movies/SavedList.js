import React from 'react';
import { Link, NavLink } from "react-router-dom";

const SavedList = props => (
  <div className="saved-list">
    {/* displays on the top left corner */}
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink to={`/movies/${movie.id}`}><span className="saved-movie">{movie.title}</span></NavLink>
    ))}
    {/* displays the home button on top right hand side  */}
    <Link to="/">
    <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedList;
