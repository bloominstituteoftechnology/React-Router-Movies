import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className = "MovieNavigation">
          <Link className="movie-link" to="/" exact>Home</Link>
          <Link className="movie-link" to="/godfather">The GodFather</Link>
          <Link className="movie-link" to="/starwars">Star Wars</Link>
          <Link className="movie-link" to="/lotr">The Lord the Rings</Link>
    </div>
  );
};

export default Navigation;

