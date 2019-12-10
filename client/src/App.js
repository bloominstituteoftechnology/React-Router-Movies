import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

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

render(){
  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Switch>
          <Route path="/movies/:id" component={Movie} />
          <Route exact path="/" component={MovieList} />
        </Switch>
      </div>
    </div>
    );
  };
}
