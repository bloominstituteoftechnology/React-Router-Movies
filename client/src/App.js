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
    savedList.includes(movie) ? 
    null : savedList.push(movie);
    this.setState({ savedList });
  };

  removeFromSavedList = event => {
    const savedList = this.state.savedList;
    savedList.pop(event);
    this.setState({ savedList });
  };


  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} removeFromSavedList={this.removeFromSavedList} />
        <Route exact path='/' component={MovieList} />
        <Route path='/movies/:id' render={props => <Movie {...props} addToSavedList={this.addToSavedList} /> } />
      </div>
    );
  }
}

//render={props => <Movie addToSavedList={this.addToSavedList} />}