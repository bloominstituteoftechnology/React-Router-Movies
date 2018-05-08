import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink to={`/movie/${movie.id}`} key={movie.id} style={{textDecoration: "none"}}>
            <span className="saved-movie">{movie.title}</span>
          </NavLink>
        ))}
        <NavLink to="/" className="saved-movie" style={{textDecoration: "none"}}>
          Home
        </NavLink>
      </div>
    );
  }
}
