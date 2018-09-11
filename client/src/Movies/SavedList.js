import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// make sure to check if movie is already on the list before adding again

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
        <Link to="/" className="home-button">Home</Link>
      </div>
    );
  }
}
