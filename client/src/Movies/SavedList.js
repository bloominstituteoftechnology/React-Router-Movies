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
          <Link style={{color: '#000', textDecoration: 'none' }} to={`/movies/${movie.id}`} key={movie.title} className="saved-movie">{movie.title}</Link>
        ))}
        <Link to="/" style={{textDecoration: 'none', color: '#000'}}>
          <div className="home-button">Home</div>
        </Link>
      </div>
    );
  }
}
