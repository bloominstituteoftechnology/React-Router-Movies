import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavbarToggler, NavbarBrand, Collapse, NavItem } from 'reactstrap';

// import { Link } from 'react-router-dom';


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
        <Navbar color="dark" toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <div id="navbrand" className='navbar-brand'>
            <Link to='/'> Router Movies </Link>
          </div>
          <Collapse isOpen={this.state.isOpen} navbar className="navbar-toggleable-md">
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="navbuttons" to='/'> Home </Link>
              </NavItem>
              <NavItem>
                <Link className="navbuttons" to='/movies'> Movies </Link>

              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
export default Navigation;
