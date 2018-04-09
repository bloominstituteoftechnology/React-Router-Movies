import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NavLink as NLink, Nav, NavItem } from 'reactstrap';

export default class SavedList extends Component {
  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        <Nav>
          {this.props.list.map((movie, i) => (
            <NavLink to={`/movies/${movie.id}`}>
              <NavItem>
                <span className="saved-movie" key={`${i}--${movie.title}`}>
                  {movie.title}
                </span>
              </NavItem>
            </NavLink>
          ))}
        </Nav>
        <Link to="/">
          <div className="home-button">Home</div>
        </Link>
      </div>
    );
  }
}
