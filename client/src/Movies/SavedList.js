/**
 * Thomas Bielawski
 * Lambda School WEB45
 * 2.3.1 React Router Project MovieList.js
 * 7/19/2021
 **/

import React from 'react';
import { Link } from 'react-router-dom';

export default function SavedList(props) 
{
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      
      {/* Added link for homebutton */}
      <Link to = "/">
      <div className="home-button">Home</div>
      </Link>
    </div>
  );
}
