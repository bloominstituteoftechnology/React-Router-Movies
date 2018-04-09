import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
    // this.HandleClick = this.HandleClick.bind(this)
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <span className="saved-movie">{movie.title}</span>
        ))}
        <Link to="/">
        <div className="home-button">Home</div>
        </Link>
        {/* <Link to="/movies" /> */}
          
      </div>
    );
  }
}
