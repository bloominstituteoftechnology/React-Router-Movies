import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Movie from "./Movie";
import MovieList from "./MovieList";
import MovieCard from "./MovieCard";


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
        <Link className="home-button" to="/">Home</Link>
      </div>
    );
  }
}
