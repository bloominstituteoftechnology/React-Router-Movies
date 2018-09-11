import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import MovieCard from './MovieCard';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <span className="saved-movie">
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </span>
        ))}
          <div className="home-button" onClick={() => this.props.history.push(`/`)}>Home</div>
      </div>
    );
  }
}
