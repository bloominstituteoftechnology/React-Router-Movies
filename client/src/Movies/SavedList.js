import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class SavedList extends Component {
  
  removeMovie(e, title) {
    const newState = this.props.list.filter(obj => {
      return obj.title !== title;
    });
    this.props.callbackRemove(newState);
  }

  clearList = movie => {
    this.props.callbackParent();
  };

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <span
            className="saved-movie"
            onClick={e => this.removeMovie(e, movie.title)}
          >
            {movie.title}
          </span>
        ))}
        <div>
          <NavLink className="home-button" to="/">
            Home
          </NavLink>
          <p />
          <div className="home-button" onClick={this.clearList}>
            Delete All
          </div>
        </div>
      </div>
    );
  }
}

// () => {this.setState({ savedList: [] })
// onClick={(e) => this.removeMovie(e, movie.title)}
