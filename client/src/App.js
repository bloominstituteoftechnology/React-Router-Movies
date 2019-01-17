import React, { Component } from "react";
import { Route } from "react-router-dom";

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
    if (savedList.includes(movie)) return;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route path="/" exact component={MovieList} />
        <Route
          path="/movies/:id"
          render={props => (
            <Movie
              addToSavedList={this.addToSavedList}
              match={props.match}
              history={props.history}
              location={props.location}
            />
          )}
        />
      </div>
    );
  }
}
