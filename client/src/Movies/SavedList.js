import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class SavedList extends Component {

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <div className="saved-movie"><NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink></div>
        ))}
        <NavLink to="/">Home</NavLink>
      </div>
    );
  }
}
