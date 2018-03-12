import React from 'react';
import './Navigation.css'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
        <h1>Movie List. Select A movie:</h1>
          <NavLink className="movie-link" activeClassName="nav-link--active" to="/" exact>Home</NavLink>
          <NavLink className="movie-link" activeClassName="nav-link--active" to="/godfather">The GodFather</NavLink>
          <NavLink className="movie-link" activeClassName="nav-link--active" to="/starwars">Star Wars</NavLink>
          <NavLink className="movie-link" activeClassName="nav-link--active" to="/lotr">The Lord the Rings</NavLink>
    </div>
  );
};

export default Navigation;