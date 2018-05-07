import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './SavedList.css';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink to={`/movies/${movie.id}`} className="saved-movie" activeClassName="selected-movie">{movie.title}</NavLink>
        ))}
        <Link to="/">
          <div className="home-button">Home</div>
        </Link>
      </div>
    );
  }
}
