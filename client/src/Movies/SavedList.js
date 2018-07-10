import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";

// Add functionality so the Home button on the SavedList component navigates back to home.
// You should now be able to navigate back and forth between the individual movies and the home screen.

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }
  // onHomeClick = () => {
  //   this.props.history.push("/");
  // };

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <span className="saved-movie">{movie.title}</span>
        ))}
        <Link to = "/">
          {/* <div onClick={this.onHomeClick} className="home-button">Home</div> */}
          <div className="home-button">Home</div>
        </Link>
      </div>
    );
  }
}
