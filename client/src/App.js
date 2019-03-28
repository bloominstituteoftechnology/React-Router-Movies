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
      addedMovieIds: []
    };
  }

  addToSavedList = movie => {
    const { savedList, addedMovieIds } = this.state;

    if (this.state.addedMovieIds.includes(movie.id) === false) {
      addedMovieIds.push(movie.id);
      savedList.push(movie);
      this.setState({ savedList, addedMovieIds });
    }
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" render={(props) => <Movie {...props} addToSavedList={this.addToSavedList} />} />
      </div>
    );
  }
}
