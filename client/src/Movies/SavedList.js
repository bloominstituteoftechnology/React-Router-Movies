import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink
            activeClassName="saved-active"
            className="movie-link"
            to={`/movies/${movie.id}`}
          >
            <span className="saved-movie">{movie.title}</span>
          </NavLink>
        ))}
        <div className="home-button">
          <Link className="movie-link" to="/">
            Home
          </Link>
        </div>
      </div>
    );
  }
}
