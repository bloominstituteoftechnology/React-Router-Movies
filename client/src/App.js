import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

import { Route, Link } from 'react-router-dom';

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

  // https://reacttraining.com/react-router/core/api/Route/render-func
  // Using render={} to pass down props to component

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <div>
          <Route exact path="/" component={MovieList} />
          <Route path="/movies/:id" render={props => (
            <Movie {...props} addToSavedList={this.addToSavedList}/>
          )}/>
        </div>
      </div>
    );
  }
}
