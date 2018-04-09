import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SavedList extends Component {
  
  render() {
    return (
      <div>
        <div className="saved-list">
          <h3>Saved Movies:</h3>
          <div className="saved-list saved-list-items">
            {this.props.list.map(movie => (
              <span key={movie.id} className="saved-movie">{movie.title}</span>
            ))}
          </div>
          <Link to="/movies">
            <div className="home-button">Home</div>
          </Link>
        </div>
      </div>
    );
  }
}
