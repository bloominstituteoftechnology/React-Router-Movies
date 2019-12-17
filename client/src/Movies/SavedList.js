import React from "react";
import { Link } from "react-router-dom";

const SavedList = props => (
  <div className="saved-list">
    {props.savedMovie ? (
      <h3>
        Save your favorite Movies <br /> and access them here:
      </h3>
    ) : (
      <h3>Saved Movies:</h3>
    )}

    {props.list.map((movie, index) => (
      <span className="saved-movie" key={index}>
        {movie.title}
      </span>
    ))}
    <div className="home-button">
      <Link to="/">Home</Link>
    </div>
  </div>
);

export default SavedList;
