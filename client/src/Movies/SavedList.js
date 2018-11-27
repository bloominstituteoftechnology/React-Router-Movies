import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink key={movie.id} to={`/movies/${movie.id}`}>
            <span className="saved-movie" key={movie.id}>
              {movie.title}
            </span>
          </NavLink>
        ))}
        <NavLink to="/">
          <div className="home-button">Home</div>
        </NavLink>
      </div>
    );
  }
}
