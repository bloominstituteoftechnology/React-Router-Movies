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
    if (!this.state.savedList.includes(movie)) {
      savedList.push(movie);
      this.setState({ savedList });
    } else {
      // do nothing
    }
  };

  render() {
    console.log("SavedList", this.state.savedList);
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
        <Route
          path="/movies/:id"
          render={props => (
            <Movie {...props} addToSavedList={this.addToSavedList} />
          )}
          // component={Movie}
          // addToSavedList={this.addToSavedList}
        />
      </div>
    );
  }
}
