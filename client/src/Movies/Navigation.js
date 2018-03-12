import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Nav className="App">
        <h1> Client side routing app </h1>
        <NavItem>
          <NavLink>
            <Link to="/">MovieList</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/movies/:">Movies</Link>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navigation;
