import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <div>
      <Nav className="App">
        <h1>Movies List</h1>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/movies">Movies</Link>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navigation;