import React from 'react';
import {Link} from 'react-router-dom';
export default function SavedList(props) {
  const {item} = props

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <Link to ="/">Home</Link>
      <Link to ='/movies/:id'>Movies</Link>
    </div>
  );
}
