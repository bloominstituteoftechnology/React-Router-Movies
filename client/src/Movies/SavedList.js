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
        {this.props.list.map((movie, i) => (
          <span key={i} className="saved-movie">{movie}</span>
        ))}
        <div className='saved-movies-buttons'>
          <Link to="/">
            <button className="home-button">Home</button>
          </Link>
          <button className="home-button" onClick={this.props.clearSaved}>Clear</button>
        </div>
      </div>
    );
  }
}
