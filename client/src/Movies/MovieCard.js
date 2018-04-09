import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const MovieCard = () => {
  return (
    <div>
      <Nav className="movies">
        <h1>Movie List</h1>
        <NavItem>
          <Link to='/'>Home</Link>
        </NavItem>
        <NavItem>
          <Link to='/movies/id'>Movies</Link>
        </NavItem>
      </Nav>
    </div>
  );
};

export default MovieCard;
