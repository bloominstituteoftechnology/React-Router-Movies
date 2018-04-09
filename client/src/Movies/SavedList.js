import React, { Component } from 'react';
import { Link } from 'react-router-dom';

let ran = Math.floor((Math.random() * 100) + 1);
export default class SavedList extends Component {

  render() {
    return (
      <div>
        <div className="saved-list">
          <h3>Saved Movies:</h3>
          <div className="saved-list saved-list-items">
            {this.props.list.map(movie => (
              <Link to={`/movies/${movie.id}`} key={movie.id} style={{ textDecoration: 'none', padding: '5px' }}>
                <span key={movie.id} className="saved-movie">{movie.title}</span>
              </Link>
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
