import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import "../index.css";
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
        <NavLink activeClassName='links' to={"/App"}>
          <div className="home-button">Home</div>
        </NavLink>

        <NavLink activeClassName='links' to={"/"}>
          <div className="home-button">Movie List</div>
        </NavLink>

      </div>
    );
  }
}