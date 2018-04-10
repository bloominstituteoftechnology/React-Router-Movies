import React, { Component } from "react";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import { Route } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    if (!savedList.includes(movie)) savedList.push(movie);
    this.setState({ savedList });
  };

  clearList() {
    console.log(this);
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} clearList={this.clearList}/>
        <Route exact path="/" render={props =>
           <MovieList addToSavedList={this.addToSavedList} list={this.state.savedList} {...props} />} />
        <Route path="/movies/:id" render={props =>
           <Movie addToSavedList={this.addToSavedList} list={this.state.savedList} {...props} />} />
      </div>
    );
  }
}
