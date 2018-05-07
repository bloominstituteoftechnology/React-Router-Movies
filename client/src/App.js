import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
//import { SavedList, MovieList, Movie } from './Movies';

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
        <Route exact path="/" component={ MovieList }/>
        <Route exact path="/Movies" component={Movie} />
        <Route exact path="/Movies/:id" component={Movie} />
        <SavedList list={this.state.savedList} />
      </div>
    );
  }
}
