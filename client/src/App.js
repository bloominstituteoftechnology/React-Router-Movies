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
    if(!savedList.find((listItem) => listItem.id === movie.id)){
      savedList.push(movie);
      this.setState({ savedList });
    } else {
      savedList.splice(savedList.indexOf(movie), 1);
      this.setState({ savedList });
    }
  };

  checkInSavedList = id => {
    return !!this.state.savedList.find((listItem) => listItem.id === id);
  }

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component = { MovieList } />
        <Route path="/movies/:id" render={ (props) => <Movie {...props} addToSavedList={this.addToSavedList} checkInSavedList={this.checkInSavedList} /> } />
      </div>
    );
  }
}
