import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../App.css';

const Navigation = () => {
  return (
    <div>
      <Nav className="App">
        <h1>Movie List</h1>
        <NavItem>
          <Link to="/movies" className="Nav-link">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/new-movie" className="Nav-link">New Movie</Link>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navigation;