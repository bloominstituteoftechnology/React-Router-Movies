import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import MovieList from 'Movies/MovieList';


export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <span className="saved-movie">{movie.title}</span>
        ))}
        {/* <Link exact path="/" componenet={MovieList}>
          <div className="home-button">Home</div>
        </Link> */}
      </div>
    );
  }
}
