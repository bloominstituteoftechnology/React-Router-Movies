import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom'

export default class SavedList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map((movie, i) => (
         <NavLink key={i}to={`/movies/${movie.id}`}> <span className="saved-movie">{movie.title}</span> </NavLink>
        ))}
        <Link to="/">
        <div className="home-button">Home</div>
        </Link>
      </div>
    );
  }
}
