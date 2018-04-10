import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { Route } from 'react-router-dom';
import Navigation from './Navigation';

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
        {/* <Navigation /> */}
        {this.state.savedList.map((item) => (
          console.log("Inside of App.js",item) ))}
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" component={Movie} />
        <SavedList list={this.state.savedList} />
      </div>
    );
  }
}
