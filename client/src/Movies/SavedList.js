import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import Movie from './Movie';

export default function SavedList(props) {

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie" >
          <Link to={`/movies/${movie.id}`}>{movie.title} </Link> 
          </span>
          
      ))}
      <div className="home-button">
        <Link to={'/'}>Home</Link>
      </div>
    </div>
  );
}
