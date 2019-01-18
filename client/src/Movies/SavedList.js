import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink activeClassName="saved-active" to={`/movies/${movie.id}`} className="saved-movie">{movie.title}</NavLink>
        ))}
        < NavLink exact to="/">Home</NavLink>
      </div>
    );
  }
}
export default SavedList;