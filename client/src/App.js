import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
// import Emmiter from './events.js';
// console.log(Emitter)

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
    // Emitter.subscribe('addToList', (event) => this.addToSavedList(event));
  }

  addToSavedList = movie => {
    // prevent duplicate entries
    if (this.state.savedList.find( m => m.id == movie.id) === undefined) {
      const savedList = this.state.savedList;
      savedList.push(movie);
      this.setState({ savedList });
    }
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path='/' render={props => <MovieList {...props} addToList={this.addToSavedList}/>}/>
        <Route path='/movies/:id' component={props => <Movie {...props} addToList={this.addToSavedList}/>}/>
      </div>
    );
  }
}
