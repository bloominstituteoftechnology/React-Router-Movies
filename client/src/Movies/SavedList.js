import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink activeClassName="saved-active" className="saved-movie" to={`/movies/${movie.id}`}>{movie.title}</NavLink>
        ))}
        <NavLink exact className="home-button" to="/">Home</NavLink>
      </div>
    );
  }
}
