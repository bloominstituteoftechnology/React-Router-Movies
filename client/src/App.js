import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { Route } from 'react-router-dom';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    for(let i = 0; i < savedList.length; i++) {
      if(savedList[i].id === movie.id) {
      return;
    }
    }
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path = '/' component = {MovieList} />
        <Route exact path = '/movies/:id' render={props => <Movie {...props} saveToListHandler={this.addToSavedList} />}/>
      </div>
    );
  }
}
