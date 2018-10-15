import React, { Component } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
// import { Module } from "module";

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
    console.log(movie);
    this.setState({ savedList }, console.log(this.state.savedList));
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <div>
          <Route exact path="/" render={props => <MovieList {...props} addToSavedList={this.addToSavedList} />} />
          <Route path="/movies/:id" render={props => <Movie {...props} addToSavedList={this.addToSavedList} />} />
        </div>
      </div>
    );
  }
}
