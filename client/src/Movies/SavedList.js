import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink to={`/movies/${movie.id}`} activeClassName='saved-active' key={`${Math.random()}`} className="saved-movie">{movie.title}</NavLink>
        ))}
        <Link className="home-button" to='/'>Home</Link>
      </div>
    );
  }
}
