import React from 'react';

import { Nav, NavItem } from 'reactstrap';

import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <div>
      <Nav className="App">
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/info">Info</Link>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navigation;
