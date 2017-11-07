import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Nav className="App">
        <h1>Movie List. Select A movie:</h1>
        <NavItem>
          <NavLink activeClassName="nav-link--active" to="/" exact>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink activeClassName="nav-link--active" to="/godfather">The GodFather</NavLink>
        </NavItem>
        <NavItem>
          <NavLink activeClassName="nav-link--active" to="/starwars">Star Wars</NavLink>
        </NavItem>
        <NavItem>
          <NavLink activeClassName="nav-link--active" to="/lotr">The Lord the Rings</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navigation;

