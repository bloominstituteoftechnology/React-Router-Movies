import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = (movie) => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <div>
          <Route exact path="/" component={MovieList} />
          <Route path="movies/:id" component={Movie} />
        </div>
      </div>
    );
  }
}
// you can put all routes in a switch component acts like a switch statement

// use render prop instead of component when you would need to
// pass down more things as props like onClick functions

// use button to send page to home using history.push("/")
// function request API on success of the data navigate to page
// example login successful sent to home page
