import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink key={`save-${Math.random()}`} to={`/movies/${movie.id}`} activeClassName= 'saved-active'>
          <span key={`save-${Math.random()}`} className="saved-movie">{movie.title}</span> </NavLink>
        ))}
         <Link className="home-button" to={"/"}className="home-button">Home</Link>
      </div>
    );
  }
}
