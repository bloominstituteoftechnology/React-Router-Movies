import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        <div className="saved-wrapper">
          {this.props.list.map(movie => (
            <NavLink exact to={`/movies/${movie.id}`} className="a">
              <span className="saved-movie">{movie.title}</span>
            </NavLink>
          ))}
        </div>
        <Link to="/" className="home-button">
          Home
        </Link>
      </div>
    );
  }
}
