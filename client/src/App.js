import React, { Component } from "react";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import { Link, Route } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Link to="/Movie">Movie</Link>
        <Link to="/MovieList">Movie List</Link>
        <Route path="/MovieList" component={MovieList} />

        <Route path="/Movie" component={Movie} />
      </div>
    );
  }
}
