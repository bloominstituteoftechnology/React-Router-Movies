import React from 'react';

import { Link } from "react-router-dom";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}

    {/* Add Link to go back to home page */}
    <Link to="/" className="home-button">Home</Link>


  </div>
);

export default SavedList;
