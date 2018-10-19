import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';




export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        <div className="saved-movie">
        {this.props.list.map(movie => (
          <span> {movie.title}</span>
        ))}
        </div>
      
        <NavLink to={'/'}>
        <div className="home-button">Home</div>
        <div className="home-button" onClick={this.props.clear}>Clear</div>
        </NavLink>
      </div>
    );
  }
}
