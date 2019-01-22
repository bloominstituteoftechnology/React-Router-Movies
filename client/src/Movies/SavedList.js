import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map((movie, index )=> (
          <NavLink exact to={`/movies/${movie.id}`} key={index} activeClassName="activeNavButton" className="saved-movie">{movie.title}</NavLink>
          // <Link exact to={`/movies/${movie.id}`} key={index} className="saved-movie">{movie.title}</Link>
        ))}
        <Link to="/" className="home-button">Home</Link>
      </div>
    );
  }
}
