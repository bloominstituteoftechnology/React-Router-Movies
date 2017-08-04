import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Nav className="App">
        <h1>Routing Movies</h1>
        <NavItem>
          <Link to="/">Movies</Link>
        </NavItem>
        <NavItem>
          <Link to="/movieslist">MoviesList</Link>
        </NavItem>
        <NavItem>
          <Link to="/moviestitle">MoviesTitle</Link>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navigation;
