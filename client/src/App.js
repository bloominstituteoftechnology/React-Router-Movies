import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const addedMovieIds = [];

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;

    if (addedMovieIds.includes(movie.id) === false) {
      console.log(movie.id);
      console.log(addedMovieIds);
      addedMovieIds.push(movie.id);
      savedList.push(movie);
      this.setState({ savedList });
    }
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" render = {(props) => <Movie {...props} addToSavedList = {this.addToSavedList} />} />        
      </div>
    );
  }
}
