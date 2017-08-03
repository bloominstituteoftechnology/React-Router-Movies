import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, NavbarBrand, Collapse, NavItem, NavLink, Button } from 'reactstrap';

import { Link } from 'react-router-dom';


class Navigation extends Component {
  constructor() {
    super();
    // controls bootstrap mobile nav
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  // used for mobile nav
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand>Router Movies</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>Home</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
export default Navigation;
