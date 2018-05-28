import React from 'react';
import { NavLink, Link } from "react-router-dom";

const SavedList = (props) => {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {props.list.map(movie => (
          <Link to={`/movie/${movie.id}`}><span className="saved-movie">{movie.title}</span></Link>
        ))}
        <NavLink to='/'><div className="home-button">Home</div></NavLink>
      </div>
    );
  }

  export default SavedList;