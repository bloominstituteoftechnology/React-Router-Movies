import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    let ditto = false;
    this.state.savedList.forEach(mov => {
      if (mov.props.children === movie.title) ditto = true;
    });
    if (!ditto)
      savedList.push(
        <NavLink to={`/movie/${movie.id}`}>{movie.title}</NavLink>
      );
    if (!ditto) this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
        <Route
          path="/movie/:id"
          render={props => (
            <Movie {...props} addToSavedList={this.addToSavedList} />
          )}
        />
      </div>
    );
  }
}
