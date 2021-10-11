import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function SavedList(props) {
  if (!props.list) return <h1>Loading...</h1>;

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map((movie) => (
        <NavLink
          key={movie.id}
          to={`/movie/${movie.id}`}
          activeStyle={{
            fontWeight: "bold",
            color: "red",
            
          }}
        >
          <span key={movie.id} className="saved-movie">
            {movie.title}
          </span>
        </NavLink>
      ))}

      <Link to="/">
        <div className="home-button">Home</div>
      </Link>
    </div>
  );
}
