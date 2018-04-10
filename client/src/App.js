import React, { Component } from "react";
import { Switch } from "react-router-dom";
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
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        {/* path to a list of movies*/}
        <Switch>
          <Route exact path="/" component={MovieList} />
          {/* path to individual movies */}
          <Route path="/movies/:id" component={Movie} />
          {/* Default */}
          <Route component={() => <h1>Invalid URL! GO BACK HOME</h1>} />
        </Switch>
      </div>
    );
  }
}