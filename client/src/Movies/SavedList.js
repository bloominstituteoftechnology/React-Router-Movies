import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';


export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        <div className="saved-container">
          {this.props.list.map(movie => (
            <NavLink to={`/movies/${movie.id}`} className="saved-movie" activeClassName="saved-active">
              {movie.title}
            </NavLink>
          ))}
        </div>
        <Link to='/'>Home</Link>
      </div>
    );
  }
}
