import React from "react";
import { NavLink, Link } from "react-router-dom";

const SavedList = props => {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink
          to={`/movies/${movie.id}`}
          key={movie.title}
          activeClassName="saved-active"
        >
          <span className="saved-movie">{movie.title}</span>
        </NavLink>
      ))}
      <Link to={"/"} className="home-button">
        Home
      </Link>
    </div>
  );
};

export default SavedList;
