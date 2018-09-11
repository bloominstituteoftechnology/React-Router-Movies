import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: [],
    };
  }

  addToSavedList = (movie) => {
    // console.log('addToSavedList test');
    const savedList = this.state.savedList;
    let movieSaved = false;
    for (let i = 0; i < savedList.length; i++) {
      if (savedList[i].id === movie.id) {
        movieSaved = true;
      }
    }
    if (!movieSaved) {
      savedList.push(movie);
    }
    this.setState({ savedList });
  };

  render() {
    return (
      // console.log('App.js render'),
      <div>
        <SavedList list={this.state.savedList} />

        <Route exact path="/" component={MovieList} />
        <Route
          path="/movies/:id"
          render={(props) => (
            <Movie {...props} addToSavedList={this.addToSavedList} />
          )}
        />
      </div>
    );
  }
}
