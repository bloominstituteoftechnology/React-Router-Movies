import React from 'react';
import { Link } from 'react-router-dom';

export default function SavedList(props) {

  const style = {
    color: 'black', 
    textDecoration: 'none', 
  }

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <Link style={style} to="/">
      <div className="home-button">Home</div>
      </Link>
    </div>
  );
}
