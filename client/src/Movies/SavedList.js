import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }
  goToLink = (url) => {
    this.props.history.push(url);
    
  }
  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map((movie, i) => (
          <NavLink to = {`/movies/${movie.id}`} activeStyle={{fontWeight: 'bold', color: 'red'}}>
          <span className="saved-movie" key = {i}>{movie.title}</span>
            </NavLink>
        ))}
        <Link to = '/' className="home-button">Home</Link>
      </div>
    );
  }
}
