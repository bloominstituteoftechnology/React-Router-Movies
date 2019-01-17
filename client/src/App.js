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
    for (let i = 0; i < savedList.length; i++){
      if (savedList[i].id === movie.id){
        console.log("Duplicate, can't add to movies");
        return true;
      }
    }
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <div>
          <Route
            exact path='/'
            render={(props) => <MovieList {...props} addToSavedList={this.addToSavedList} />}
          />
          <Route
            exact path="/movies/:id"
            render={(props) => <Movie {...props} addToSavedList={this.addToSavedList} />}
          />
        </div>
      </div>
    );
  }
}
