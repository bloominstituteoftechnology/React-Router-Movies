import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Movie from './Movies/Movie'

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    let pushMovie = [];

    savedList.forEach( (item)=> {
      if (item.title === movie.title) {
        pushMovie.push(movie)
      }
    })
    
    if (pushMovie.length === 0) {savedList.push(movie)};
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" render={props => (
          <Movie {...props} addToSavedList={this.addToSavedList} />
        )} />
      </div>
    );
  }
}
