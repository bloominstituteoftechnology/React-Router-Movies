import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <Link to={`/movie/${movie.id}`} className="saved-movie">{movie.title}</Link>
        ))}
        <div>
          <div onClick={() => this.props.history.push('/')} className="home-button">Home</div>
          <div onClick={() => window.location.reload()} className="home-button">Erase</div>
        </div>
      </div>
    );
  }
}
