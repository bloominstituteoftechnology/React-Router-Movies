import React from 'react';
import { NavLink } from 'react-router-dom';

const SavedList = props => {
  return (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink activeClassName='activeNavButton' to={`/movies/${movie.id}`}><span className="saved-movie">{movie.title}</span></NavLink>
    ))}
   <NavLink activeClassName='activeNavButton' to={'/'}><div className="home-button">Home</div>
   </NavLink> 
  </div>
  )
};

export default SavedList;