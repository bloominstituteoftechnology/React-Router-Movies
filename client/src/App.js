import React, { Component } from 'react';
import { Route } from 'react-router-dom'

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
    for(let i = 0; i < savedList.length;++i){
      if(savedList[i].title === movie.title){
        return;
      }
    }
    savedList.push(movie);
    console.log("SAVED!")
    this.setState({ savedList });
  };

  render() {
    return (
      <div className="App">
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movies/:id" render={(props) => <Movie {...props} addToSavedList={this.addToSavedList} />} />
      </div>
    );
  }
}
