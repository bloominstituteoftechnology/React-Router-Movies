import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import './SavedList.css';

export default class SavedList extends Component {
  render() {
    const activeStyle = {
      border: '1px solid black',
      borderRadius: '5px',
      padding: '5px',
    };

    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink key = {movie.id} to = { `/movies/${movie.id}` } activeStyle = { activeStyle }>
            <span className="saved-movie">{movie.title}</span>
          </NavLink>
        ))}
        <Link to = '/'>
          <div className="home-button">Home</div>
        </Link>
      </div>
    );
  }
}
