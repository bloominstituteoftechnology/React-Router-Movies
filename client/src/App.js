import React, { Component } from 'react';
import {Route} from 'react-router-dom';

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
    const savedListIds = this.state.savedList.map(savedMovie=>savedMovie.id);
    if (!savedListIds.includes(movie.id)) {
      savedList.push(movie);
      this.setState({ savedList });
    }
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList}></Route>
        <Route path="/movies/:id" render={props => <Movie {...props} addToSavedList={this.addToSavedList}/>}></Route>
      </div>
    );
  }
}
