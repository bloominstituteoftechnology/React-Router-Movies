import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <span className="saved-movie">{movie.title}</span>
        ))}
        <NavLink exact to="/" className="home-button">
          Home
        </NavLink>
      </div>
    );
  }
}
