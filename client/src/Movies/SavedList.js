import React from 'react';
import { Link } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span onClick={()=>props.history.push(`/movies/${movie.id}`)} key={movie.id} className="saved-movie">{movie.title}</span>
    ))}
    <Link to="/">
      <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedList;
