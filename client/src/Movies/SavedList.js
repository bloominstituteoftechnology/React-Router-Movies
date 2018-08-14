import React, { Component } from 'react';
import { Link } from "react-router-dom";
import MovieList from "./MovieList";

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

        <Link to={`/App`}>
          <div className="home-button">Home</div>
        </Link>

        <Link to={`/MovieList`}>
          <div className="home-button">Movie-List</div>
        </Link>

      </div>
    );
  }
}
