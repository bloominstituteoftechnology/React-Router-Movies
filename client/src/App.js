import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import Route from 'react-router-dom/Route';

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
        <SavedList list={this.state.savedList} />
        <div>
          <Route exact path="./Movies" component={MovieList}/>
          <Route path="./Movies/:id" component={Movie}/>
        </div>
      </div>
    );
  }
}
