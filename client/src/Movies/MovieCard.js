import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const MovieCard = props => {
  return (
    <div>
      <Nav className="App">
        <h1>React Router Mini</h1>
        <NavItem>
          <Link to="/movies/:id">MovieList</Link>
        </NavItem>
      </Nav>
    </div>
  )
};

export default MovieCard;
