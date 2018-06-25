import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


export default class App extends Component {

  state = { savedList: [] }

  addToSavedList = movie => {
    const savedList = this.state.savedList.slice();
    
    if(!savedList.includes(movie))
      savedList.push(movie);
    
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" component={addHandler(Movie, this.addToSavedList)} />
      </div>
    );
  }
}

const addHandler = (Component, handler) => props => 
  <Component {...props} addToSavedList={handler} />
