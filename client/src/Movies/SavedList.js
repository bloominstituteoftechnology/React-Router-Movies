import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Movie from './Movie';

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
        <Link to="/" component={Movie}><div className="home-button">Home</div></Link>
      </div>
    );
  }
}
