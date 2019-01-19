import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <Link to="/movies/{movie.id}" className="saved-movie">{movie.title}</Link>
        ))}
          <Link to="/">
              Home
          </Link>

      </div>
    );
  }
}
//You will need to pass the addToSavedList function to the Movie component.
// Once you have done that you will need to add a click handler to the save button.