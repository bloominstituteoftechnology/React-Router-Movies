import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class SavedList extends Component {

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink to={`/movies/${movie.id}`} className="saved-movie" activeClassName="selected" activeStyle={{textDecoration: "none", backgroundColor: "black", color: "white"}}> {movie.title}</NavLink>
        ))}
        <Link className="home-button" to="/">Home </Link>
        </div>
    );
  }
}
