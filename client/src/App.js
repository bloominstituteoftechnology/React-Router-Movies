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
    const arr = [];  
    savedList.forEach(item=> {
      if (item === movie) {
        arr.push(movie)
      }
    })    
    if (!arr.length) {savedList.push(movie)};
    this.setState({ savedList });
  };

  deleteMovie = id => {
    this.setState({
      savedList: this.state.savedList.filter(movie => movie.id !== id)
    })
  }
  render() {
      return  <div>
                  <SavedList list={this.state.savedList} deleteMovie={this.deleteMovie} />
                  <Route exact path="/" render={props => <MovieList {...props} />} />
                  <Route path="/movies/:id" render={props => <Movie {...props} addToSavedList={this.addToSavedList} />} />
              </div>    
  }
}

