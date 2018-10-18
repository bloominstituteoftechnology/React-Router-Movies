import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { Route } from 'react-router';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    let newMovie = true;
    const savedList = this.state.savedList;
    savedList.map(item => {
      if (movie.title === item.title) {
        newMovie = false;
      }
    })
    if (newMovie) {
      savedList.push(movie);
      this.setState({ savedList });
    }
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route path='/' exact component={() => <MovieList onClick={this.addToSavedList} />}>
        </Route>
        <Route path='/movies/:id' component={(props) => <Movie addToSavedList={this.addToSavedList} {...props} />}>
        </Route>
      </div>
    );
  }
}
