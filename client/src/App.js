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

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    let index = savedList.indexOf(movie);  
    if (index < 0) savedList.push(movie);  // this will prevent immediate dupilcates
    this.setState({ savedList });          // still duplicates when redirection occurs
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/movies" component={MovieList} />
        <Route 
          path="/movies/:id" 
          render={(props) => <Movie {...props} addToSavedList={this.addToSavedList} />}
        />
      </div>
    );
  }
}
